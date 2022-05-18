const edit = document.getElementById("edit");
const popup = document.getElementById("popup");
const close = document.getElementById("close");
const company_name = document.getElementById("company_name");
const company_tagline = document.getElementById("company_tagline");
const website = document.getElementById("website");
const email = document.getElementById("email");
const mobile1 = document.getElementById("mobile1");
const mobile2 = document.getElementById("mobile2");
const address_line1 = document.getElementById("address_line1");
const address_line2 = document.getElementById("address_line2");
const yourName = document.getElementById("name");
const post = document.getElementById("post");
const preview = document.getElementById("preview");




edit.addEventListener("click", function() {
    popup.style.display = "flex";
});

close.addEventListener("click", function() {
    popup.style.display = "none";
})

preview.addEventListener("click", function() {
    popup.style.display = "none";
    document.getElementById("company-name").innerHTML = company_name.value;
    document.getElementById("Company-name").innerHTML = company_name.value;
    document.getElementById("tagline1").innerHTML = company_tagline.value;
    document.getElementById("tagline2").innerHTML = company_tagline.value;
    document.getElementById("website_name").innerHTML = website.value;
    document.getElementById("email_address").innerHTML = email.value;
    document.getElementById("Phone1").innerHTML = mobile1.value;
    document.getElementById("Phone2").innerHTML = mobile2.value;
    document.getElementById("Address1").innerHTML = address_line1.value;
    document.getElementById("Address2").innerHTML = address_line2.value;
    document.getElementById("Your-Name").innerHTML = yourName.value;
    document.getElementById("Post").innerHTML = post.value;
    document.getElementById("logo1").src = document.getElementById("select-logo").value;
    
});

document.getElementById("search-popup").addEventListener("click", function() {
    document.getElementById("open_logo").style.display = "flex";
})

document.getElementById("logo-select").addEventListener("click", function() {
    document.getElementById("logo1").src = document.getElementById("logo-select").src;
    document.getElementById("logo2").src = document.getElementById("logo-select").src;
    document.getElementById("open_logo").style.display = "none";
});

document.getElementById("close2").addEventListener("click", function() {
    document.getElementById("open_logo").style.display = "none";
})

document.getElementById("search").addEventListener("click", function() {
    var logo_name = document.getElementById("input-select").value;
    logo_name = logo_name.toLowerCase();
    logo_name = logo_name.split(" ").join("+");
    document.getElementById("logo-select").src = `https://logo.clearbit.com/${logo_name}`;
    document.getElementById("logo-select").style.display = "block";
    
});

document.getElementById("download").addEventListener('click', function() {
    /* html2canvas(document.getElementById("back"), {
        onrendered: function(canvas) {
            // document.body.appendChild(canvas);
          return Canvas2Image.saveAsPNG(canvas);
        }
    }); */
});
