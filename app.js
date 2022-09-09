
const newsCategory = () => {

     const url = `https://openapi.programming-hero.com/api/news/categories`;

     fetch(url)
          .then(res => res.json())
          .then(data => displayNewsCategory(data.data.news_category))
}


const displayNewsCategory = (newses) => {

     const newsContainer = document.getElementById('news-container');

     for (const news of newses) {
          //console.log(news);

          const titleDiv = document.createElement('div');
          titleDiv.innerHTML = `
             <h5 onclick ="loadNewsDetails('${news.category_id}')" class="p-2"> ${news.category_name} </h5> 
          
          `;
          newsContainer.appendChild(titleDiv);

     }

}

const loadNewsDetails = (category_id) => {
     const url = `https://openapi.programming-hero.com/api/news/category/${category_id}`;
     fetch(url)
          .then(res => res.json())
          .then(data => displayNewsDetails(data.data))


}

const displayNewsDetails = (news) => {

     console.log(news)

     const newsDetailsContainer = document.getElementById('news-details');

     const newsDetailsDiv = document.createElement('div');
     newsDetailsDiv.classList.add('col');

     newsDetailsDiv.innerHTML = `
                    <div class="col-md-4 col-sm-12">
                            <img src="" class="img-fluid rounded-start" alt="...">
                    </div>

                    <div class="col-md-8 col-sm-12">
                         <div class="card-body">
                              <h5 class="card-title"></h5>
                              <p class="card-text">This is a wider card with supporting text below as a natural
                                   lead-in to additional content. This content is a little bit longer.</p>
                              <p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p>
                         </div>
                    </div>
     
     `;
     newsDetailsContainer.appendChild(newsDetailsDiv);


}


newsCategory();