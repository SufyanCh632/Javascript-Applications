window.onload = function()
{
    getImageGalleryReady();

    document.getElementById("crossbtn").onclick = function()
    {
        document.getElementById("modal").style.display = "none";
    }
}

function getImageGalleryReady()
{
    var img = document.getElementsByClassName("main-img");

    for(var i = 0; i < img.length; i++)
    {
        img[i].onclick = function()
        {
            openModal(this.src);
        }
    }
}

function openModal(src)
{
    document.getElementById("modal").style.display = "flex";
    document.getElementById("modalImg").src = src;
}
