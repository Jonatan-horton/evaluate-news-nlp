import { checkForName } from "./nameChecker";

function handleSubmit(event) {
    event.preventDefault()
    document.querySelector('#errorMessage').innerHTML = '';

    // check what text was put into the form field
    let formUrl = document.getElementById('urlInput').value;
    const errorMessage = document.getElementById('errorMessage');
    if (checkForName(formUrl)) {
        fetch("http://localhost:8081/article", {
            method: "POST",
            cache: "no-cache",
            credentials: "same-origin",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({ formUrl }),
        })
            .then((res) => res.json())
            .then((res) => {
                updateUI(res);
            })
    } else {
        
        const errorMessageDiv = document.querySelector('#errorMessage');
        const spanEl = document.createElement('span');
        spanEl.innerText = "Invalid URL";
        errorMessageDiv.appendChild(spanEl);
        console.log(errorMessage, "invalid url")
    }

    console.log("::: Form Submitted :::")
}

async function updateUI(res) {
    // GET function that takes the info from the server
    document.querySelector('#result_output').innerText = 'Confidence = ' + res.confidence + '%';
    document.querySelector('#subjectivity_output').innerText = res.subjectivity;
    document.querySelector('#score_output').innerText = `Polarity: ${handleSubmitTag(
        res.handleSubmit_tag
      )}`;
}

export const handleSubmitTag = (handleSubmit_tag) => {
    if (handleSubmit_tag === "P+" || handleSubmit_tag === "P") {
        return "Positive";
    } else if (handleSubmit_tag === "N+" || handleSubmit_tag === "N") {
        return "Negative";
    } else if (handleSubmit_tag === "NEU") {
        return "Neutral";
    } else {
        return "Non Sentimental";
    }
};

export { handleSubmit }
