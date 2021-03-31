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
          <div v-for="item in $page.allBlogPost.edges" class="post-preview" :key="item.node.id">
            <a href="post.html">
              <h2 class="post-title">
                {{ item.node.fileInfo.name }}
              </h2>
              <h3 class="post-subtitle">
                {{ item.node.title }}
              </h3>
            </a>
            <p class="post-meta">
              Posted by
              <a href="#">Start Bootstrap</a>
              on September 24, 2019
            </p>
          </div>
          <hr />
          <!-- Pager -->
          <div class="clearfix">
            <a class="btn btn-primary float-right" href="#"
              >Older Posts &rarr;</a
            >
          </div>
        </div>
      </div>
    </div>
  </Layout>
</template>

<page-query>
query {
	allBlogPost {
    edges {
      node {
        id
        path
        title
        content
        fileInfo {
          name
        }
      }
    }
  }
}
</page-query>

<script>
export default {
  name: 'Home',
  metaInfo: {
    title: 'Home',
  },
}
</script>

<style></style>
