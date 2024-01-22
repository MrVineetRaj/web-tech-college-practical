function showCapital() {
    let countrySelected = document.getElementById("country").value;
    let backgroundImage = document.getElementById("body").style.background;
    let capital;
    for (let index = 0; index < 6; index++) {
        document.getElementById(`image${index}`).classList.remove('active');
    }
    switch (countrySelected) {
        case "India":
            capital = "Delhi"
            document.getElementById(`image1`).classList.add('active');
            break;
        case "Pakistan":
            capital = "Islamabad"
            document.getElementById(`image2`).classList.add('active');
            break;
        case "Japan":
            capital = "Tokyo";
            document.getElementById(`image3`).classList.add('active');
            break;
        case "Russia":
            capital = "Moscow";
            document.getElementById(`image4`).classList.add('active');
            break;
        case "America":
            capital = "Washington, D.C.";
            document.getElementById(`image5`).classList.add('active');
            break;
    }
    document.getElementById("capital").innerText = capital;
}
