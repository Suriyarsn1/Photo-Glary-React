import bag from "../assets/bg.jpg"
function ImageContainer(){
    return(
      <>
        <body style={{backgroundImage:`url(${bag})`,backgroundRepeat:"no-repeat",backgroundSize:"cover"}}>
            <div class="main">
                <div class="header">
                    <h1 class="container__title">Image Gallery</h1>
                    <hr class="container__line"></hr>
                </div>
                <div class="image-container">
                    <img class="image-container__c1" src="https://picsum.photos/200/300?random=1" alt="random_image"></img>
                    <img class="image-container__c1" src="https://picsum.photos/200/300?random=2" alt="random_image"></img>
                    <img class="image-container__c1" src="https://picsum.photos/200/300?random=3" alt="random_image"></img>
                    <img class="image-container__c1" src="https://picsum.photos/200/300?random=4" alt="random_image"></img>
                    <img class="image-container__c1" src="https://picsum.photos/200/300?random=5" alt="random_image"></img>
                    <img class="image-container__c1" src="https://picsum.photos/200/300?random=6" alt="random_image"></img>
                    <img class="image-container__c1" src="https://picsum.photos/200/300?random=7" alt="random_image"></img>
                    <img class="image-container__c1" src="https://picsum.photos/200/300?random=8" alt="random_image"></img>
                </div>
            </div>
        </body>
        </>)
}
export default ImageContainer