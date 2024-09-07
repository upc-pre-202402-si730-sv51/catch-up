<script>
import {NewsApiService} from "./news/services/news-api.service.js";
import {Article} from "./news/model/article.entity.js";
import SourceList from "./news/components/source-list.component.vue";
import LanguageSwitcher from "./public/components/language-switcher.component.vue";
import ArticleList from "./news/components/article-list.component.vue";
import UnavailableContent from "./news/components/unavailable-content.component.vue";
import FooterContent from "./public/components/footer-content.component.vue";

export default {
  name: 'App',
  components: {FooterContent, UnavailableContent, ArticleList, LanguageSwitcher, SourceList},
  data() {
    return {
      drawerVisible: false,
      articles: [],
      errors: [],
      newsApi: new NewsApiService()
    }
  },
  methods: {
    buildArticleListFromResponseDate(articles) {
      return articles.map(article => new Article(
          article.title,
          article.description,
          article.url,
          article.urlToImage,
          article.source,
          article.publishedAt
      ));
    },
    getArticlesForSource(sourceId) {
      this.newsApi.getArticlesForSource(sourceId)
          .then(response => {
            let articles = response.data.articles;
            this.articles = this.buildArticleListFromResponseDate(articles);
            console.log(this.articles);
          })
          .catch(e => this.errors.push(e));
    },
    getArticlesForSourceWithLogo(source) {
      this.newsApi.getArticlesForSource(source.id)
          .then(response => {
            let articles = response.data.articles;
            this.articles = this.buildArticleListFromResponseDate(articles);
            this.articles.forEach(article => article.source.urlToLogo = source.urlToLogo);
            console.log(this.articles);
          })
          .catch(e => this.errors.push(e));
    },
    toggleSidebar() {
      this.drawerVisible = !this.drawerVisible;
    },
    setSource(source) {
      this.getArticlesForSourceWithLogo(source);
      this.toggleSidebar();
    }
  },
  created() {
    this.getArticlesForSource('bbc-news');
  }
}
</script>

<template>
  <div>
    <div>
      <pv-menubar>
        <template #start>
          <pv-button icon="pi pi-bars" label="CatchUp" text @click="toggleSidebar"/>
          <source-list v-model:visible="drawerVisible" @source-selected="setSource"/>
        </template>
        <template #end>
          <language-switcher/>
        </template>
      </pv-menubar>
    </div>
  </div>
  <div>
    <article-list v-if="errors" :articles="articles"/>
    <unavailable-content v-else :errors="errors"/>
  </div>
  <footer-content/>
</template>

<style scoped>

</style>
