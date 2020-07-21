const getData = (data = [], placeholder, selectItem = false, selectedID) => {
  let text = placeholder ?? "Выберите";
  const items = data.map((item) => {
    let cls = "";
    if (item.id === selectedID) {
      text = item.value;
      if (selectItem) {
        cls = "selected";
      }
    }
    return `
    <li class="select__item ${cls}" data-type="item" data-id="${item.id}">${item.value}</li>
    `;
  });

  return `
  <div class="select__backdrop" data-type="backdrop"></div>
  <div class="select__input" data-type="input">
  <span data-type="value">${text}</span>
  <i class="fa fa-angle-down" data-type="angle" aria-hidden="true"></i>
</div>
<div class="select__dropdown">
  <ul class="select__list">
    ${items.join("")}
  </ul>
</div>
  `;
};

export class Select {
  constructor(selector, options) {
    this.$el = document.querySelector(selector);
    this.options = options;
    this.selectedID = options.selectedID;

    this.#render();
    this.#setup();
  }

  #render() {
    const { placeholder, data, selectItem } = this.options;
    this.$el.classList.add("select");
    this.$el.innerHTML = getData(
      data,
      placeholder,
      selectItem,
      this.selectedID
    );
  }

  #setup() {
    this.clickHandler = this.clickHandler.bind(this);
    this.$el.addEventListener("click", this.clickHandler);
    this.$angle = this.$el.querySelector('[data-type="angle"]');
    this.$value = this.$el.querySelector('[data-type="value"]');
  }

  clickHandler(event) {
    const { type } = event.target.dataset;

    if (type === "input") {
      this.toggle();
    } else if (type === "item") {
      const id = event.target.dataset.id;
      this.select(id);
    } else if (type === "backdrop") {
      this.close();
    }
  }

  get isOpen() {
    return this.$el.classList.contains("open");
  }

  get current() {
    return this.options.data.find((item) => item.id === this.selectedID);
  }

  select(id) {
    this.selectedID = id;
    this.$value.textContent = this.current.value;
    if (this.options.selectItem) {
      this.$el.querySelectorAll(`[data-type="item"]`).forEach((el) => {
        el.classList.remove("selected");
      });
      this.$el.querySelector(`[data-id="${id}"]`).classList.add("selected");
    }

    this.options.onSelect ? this.options.onSelect(this.current) : null;

    this.close();
  }

  toggle() {
    this.isOpen ? this.close() : this.open();
  }

  open() {
    this.$el.classList.add("open");
    this.$angle.classList.remove("fa-angle-down");
    this.$angle.classList.add("fa-angle-up");
  }

  close() {
    this.$el.classList.remove("open");
    this.$angle.classList.remove("fa-angle-up");
    this.$angle.classList.add("fa-angle-down");
  }

  destroy() {
    this.$el.removeEventListener("click", this.clickHandler);
    this.$el.innerHTML = "";
  }
}
