





function calculateAge() {
    let day = document.getElementById('DAY').value;
    let month = document.getElementById('MONTH').value;
    let year = document.getElementById('YEAR').value;

    if(day && month && year) {
        // მომხმარებლის დაბადების თარიღი
        let birthDate = new Date(year, month - 1, day); // თვე 0-დან იწყება, ამიტომ 1-ს გამოვაკლებთ
        // მიმდინარე თარიღი
        let currentDate = new Date();

        // ასაკის გამოთვლა
        let ageYears = currentDate.getFullYear() - birthDate.getFullYear();
        let ageMonths = currentDate.getMonth() - birthDate.getMonth();
        let ageDays = currentDate.getDate() - birthDate.getDate();

        // თუ თვე ან დღე არ შესრულდა მიმდინარე წელიწადში, გამოაკლეთ 1 წელი
        if (ageMonths < 0 || (ageMonths === 0 && ageDays < 0)) {
            ageYears--;
            ageMonths += 12;
        }
        if (ageDays < 0) {
            let prevMonth = new Date(currentDate.getFullYear(), currentDate.getMonth(), 0);
            ageDays += prevMonth.getDate();
            ageMonths--;
        }

        document.getElementById('yearResult').innerText = `ასაკი წელიწადებში: ${ageYears} წელი`;
        document.getElementById('monthResult').innerText = `ასაკი თვეებში: ${ageMonths} თვე`;
        document.getElementById('daysResult').innerText = `ასაკი დღეებში: ${ageDays} დღე`;
    } else {
        document.getElementById('daysResult').innerText = "გთხოვთ შეიყვანოთ სწორი თარიღი.";
        document.getElementById('monthResult').innerText = "";
        document.getElementById('yearResult').innerText = "";
    }
    daysResult.style.color="red";
    monthResult.style.color="green";
    yearResult.style.color="blue";
    
}