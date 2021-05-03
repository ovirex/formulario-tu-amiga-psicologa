document.addEventListener("DOMContentLoaded", function () {
    const situationsFormBtn = document.getElementById("get-results-btn");

    situationsFormBtn.addEventListener("click", function () {
        const formElementsArray = Array.from(
            document.querySelectorAll("#situations-form input[type='checkbox']")
        );
        let checkedInputs = 0;
        let extremeOptions = 0;

        for (let i = 0; i < formElementsArray.length; i++) {
            if (formElementsArray[i].checked) {
                checkedInputs++;
                if (formElementsArray[i].dataset.xOption == "x") {
                    extremeOptions++;
                }
            }
        }

        if (extremeOptions > 0) {
            changeTextResults(
                "",
                "<strong>Te identificaste con una situación bastante difícil y traumática, que posiblemente esté afectándote</strong>, puede que no lo notes porque intentas sobrellevarlo o puede que lo hayas reprimido. Definitivamente necesitas iniciar un proceso psicoterapéutico, para sanar la herida y restablecer el vínculo. Yo puedo ayudarte.",
                "Contáctame",
                true
            );
        } else if (checkedInputs == 1) {
            changeTextResults(
                "Elegiste una opción con la cual te identificaste.",
                "Esta opción puede ser suficiente para iniciar un proceso psicoterapéutico, antes que el malestar aparezca o aumente. Aunque si no deseas iniciar todavía, quizá el contenido de mis plataformas pueda ayudarte.",
                "Ver contenido",
                false
            );
        } else if (checkedInputs == 2) {
            changeTextResults(
                "Elegiste dos opciones con las cuales te identificaste.",
                "Probablemente ya haya aparecido cierto malestar significativo, de ser así, debes recurrir a la psicoterapia. Yo puedo ayudarte. Pero si consideras que aún no presentas un malestar significativo, quizá el contenido del resto de mis plataformas puedas ayudarte.",
                "Ver contenido",
                false
            );
        } else if (checkedInputs == 3) {
            changeTextResults(
                "Elegiste tres opciones con las cuales te identificaste.",
                "Lo más probable es que ya exista un malestar significativo, debido a estas situaciones. Es momento de buscar ayuda, antes que los malestares empeoren o afecten más áreas de tu vida. Yo puedo ayudarte.",
                "Ver contenido",
                false
            );
        } else if (checkedInputs > 3) {
            changeTextResults(
                "Elegiste más de tres opciones con las cuales te identificaste.",
                "Lo más probable es que ya exista un malestar significativo, debido a estas situaciones. Es momento de buscar ayuda, antes que los malestares empeoren o afecten más áreas de tu vida. Yo puedo ayudarte.",
                "Ver contenido",
                false
            );
        }
    });
});

function changeTextResults(heading, text, btnText, isExtreme = false) {
    const resultTextWrapper = document.querySelector(".result-text-wrapper");
    const resultsContainer = document.querySelector(".result-container");
    const distanceOfResultContainer = document.getElementsByClassName(
        "result-container"
    )[0];
    let isExtremeOption = isExtreme;

    resultTextWrapper.getElementsByTagName("h3")[0].innerText = heading;
    resultTextWrapper.getElementsByTagName("p")[0].innerText = text;
    resultTextWrapper.getElementsByTagName("a")[0].innerText = btnText;

    if (isExtremeOption) {
        resultTextWrapper.getElementsByTagName("p")[0].innerHTML = text;
        resultTextWrapper.getElementsByTagName("a")[0].href =
            "https://tuamigapsicologa.com/contacto/";
    } else {
        resultTextWrapper.getElementsByTagName("a")[0].href =
            "https://www.instagram.com/tuamigapsicologa/reels/";
    }
    resultsContainer.classList.remove("hide-results");

    const resultsContainerPosition = getElementLocation(
        document.querySelector(".result-container")
    );

    window.scroll({
        top: resultsContainerPosition.top - 200,
        left: 0,
        behavior: "smooth",
    });
}

function getElementLocation(element) {
    let rect = element.getBoundingClientRect();
    let scrollLeft = window.pageXOffset || document.documentElement.scrollLeft;
    let scrollTop = window.pageYOffset || document.documentElement.scrollTop;

    return { top: rect.top + scrollTop, left: rect.left + scrollLeft };
}
