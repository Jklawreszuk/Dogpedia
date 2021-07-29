// Please see documentation at https://docs.microsoft.com/aspnet/core/client-side/bundling-and-minification
// for details on configuring this project to bundle and minify static web assets.

// Write your JavaScript code.
function input(Name, Type, ContentArr) {
    $(document).ready(function () {

        let obj;
        switch (Type) {
            case "TextBox":
                obj = {
                    placeholder: ContentArr[0],
                    label: {
                        content: ContentArr[1],
                        floating: true
                    }
                };
                break;
            case "Slider":
                obj = {
                    increaseButtonTitle: "Zwiększ",
                    decreaseButtonTitle: "Zmniejsz",
                    min: ContentArr[0],
                    max: ContentArr[1],
                    smallStep: 1,
                    largeStep: 3
                };
                break;
            default:
                break;
        }

        $(Name)[`kendo${Type}`](obj);
    });
}

input(".name", "TextBox", ["Wpisz rasę psa tutaj", "Nazwa"]);
input(".corigin", "TextBox", ["Wpisz pochodzenie psa", "Kraj pochodzenia"]);
input(".weight", "TextBox", ["Wpisz wagę psa", "Waga"]);
input(".price", "TextBox", ["Ustal wartość psa", "Cena"]);
input(".lifespan", "Slider", [0, 100]);