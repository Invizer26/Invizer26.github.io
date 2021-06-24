$().ready(function () {
    $("#participate-form").validate({
        rules:  {
            name:   "required",
            company:   "required",
            email:     {
                required: true,
                email:  true
            },
            telethon:   "required",

        },
        message:    {
            name: "Пожалуйста введите ваши имя и фамилия",
            company: "Пожалуйста введите вашу компанию",
            email: "Пожалуйста введите ваш email",
            telethon: "Пожалуйста введите ваш телефон",
        }
    })
})