document.addEventListener("DomContentLoaded", function(){
    const menuLinks = document.querySelectorAll(".sidebar a");

    menuLinks.forEach(function (link){
         
        link.addEventListener("click", function (event){
            event.preventDefault();

            menuLinks.forEach(function (item){
                item.classList.remove("active");
            });

            this.classList.add("active");

            const pageName = this.textContext.trim();

            if(pageName !== "Logout"){
                alert("You selected: " + pageName);
         }
            
    });

});

const logoutLink = Array.from(menuLinks).find(function (links){
    return link.textContext.trim() === "Logout";
});

if (logoutLink){
    logoutLink.addEventListener("click", function (event){

        event.preventDefault();

        const confirmLogout = confirm (
            "Are you sure you want to logout?"
        );
        
    }
}
      
        
