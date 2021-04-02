<template>
  <Layout>
    <!-- Page Header -->
    <header class="masthead" style="background-image: url('/img/home-bg.jpg')">
      <div class="overlay"></div>
      <div class="container">
        <div class="row">
          <div class="col-lg-8 col-md-10 mx-auto">
            <div class="site-heading">
              <h1>Clean Blog</h1>
              <span class="subheading">A Blog Theme by Start Bootstrap</span>
            </div>
          </div>
        </div>
      </div>
    </header>

    <!-- Main Content -->
    <div class="container">
      <div class="row">
        <div class="col-lg-8 col-md-10 mx-auto">
          <div v-for="item in $page.posts.edges" class="post-preview" :key="item.node.id">
            <g-link :to="`/post/${item.node.id}`">
              <h2 class="post-title">
                {{ item.node.title }}
              </h2>
              <h3 class="post-subtitle">
                {{ item.node.title }}
              </h3>
            </g-link>
            <p class="post-meta">
              Posted by
              <a href="#">{{ item.node.created_name.firstname + item.node.created_name.lastname }}</a>
              {{ item.node.created_at }}
            </p>
            <span v-for="tag in item.node.tags" :key="tag.id">
              <a href="">{{ tag.title }}</a>
              &nbsp;&nbsp;
             </span>
            <hr />
          </div>
          <!-- Pager -->
          <Pager :info="$page.posts.pageInfo"/>
        </div>
      </div>
    </div>
  </Layout>
</template>

<page-query>
query ($page: Int){
	posts: allStrapiPost (perPage: 2, page: $page) @paginate{
    pageInfo {
      totalPages
      currentPage
    }
		edges {
      node {
        id
        title
        created_name {
          id
          firstname
          lastname
        }
        created_at
        updated_at
        tags {
          id
          title
        }
      }
    }
  }
}
</page-query>

<script>
import { Pager } from 'gridsome'
export default {
  name: 'Home',
  components: {
    Pager
  },
  metaInfo: {
    title: 'Home',
  },
}
</script>

<style></style>
