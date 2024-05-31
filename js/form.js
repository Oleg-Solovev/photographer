
// Валидация модального окна
let validation = new JustValidate('#form')

// Подключение маски для номера телефона
let selector = document.querySelector("#phone")
let im = new Inputmask("+7(999)999-99-99")
im.mask(selector)

validation.addField('#name', [
    {
        rule: "required",
        errorMessage: 'Введите имя'
    },
    {
        rule: "minLength",
        value: 2,
        errorMessage: 'Минимум 2 символа'
    }
]).addField('#phone', [
    {
        validator: (value) => {
            const phone = selector.inputmask.unmaskedvalue()
            return Boolean(Number(phone) && phone.length > 0)
        },
        errorMessage: 'Введите телефон'
    },
    {
        validator: (value) => {
            const phone = selector.inputmask.unmaskedvalue()
            return Boolean(Number(phone) && phone.length === 10)
        },
        errorMessage: 'Недопустимый формат'
    }
]).addField('#msg', [
    {
        rule: "required",
        errorMessage: 'Введите сообщение'
    },
    {
        rule: "maxLength",
        value: 100,
        errorMessage: 'Максимум 100 символов'
    }
]).onSuccess(function() {
let data = {
    name: document.getElementById("name").value,
    phone: selector.inputmask.unmaskedvalue(),
    msg: document.getElementById("msg").value
}

console.log(data);
})


// модальное окно
const callFormBtn = document.getElementById('call-form');
const modalCallForm = document.getElementById('modal-call-form');

// открытие модального окна
callFormBtn.addEventListener("click", function () {
    modalCallForm.classList.add("modal-parent--open")
})

// закрытие модального окна
modalCallForm.querySelector(".modal").addEventListener("click", function (event) {
    event._isClick = true
})
modalCallForm.addEventListener("click", function (event) {
    if (event._isClick === true) return
    modalCallForm.classList.remove("modal-parent--open")
})

// закрытие модального окна на Esc
window.addEventListener("keydown", function (event) {
    if (event.key === "Escape") {
        modalCallForm.classList.remove("modal-parent--open")
    }
})

