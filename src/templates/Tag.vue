<template>
  <Layout>
    <!-- Page Header -->
    <header class="masthead" style="background-image: url('/img/home-bg.jpg')">
      <div class="overlay"></div>
      <div class="container">
        <div class="row">
          <div class="col-lg-8 col-md-10 mx-auto">
            <div class="site-heading">
              <h1># {{ $page.strapiTag.title }}</h1>
            </div>
          </div>
        </div>
      </div>
    </header>

    <!-- Main Content -->
    <div class="container">
      <div class="row">
        <div class="col-lg-8 col-md-10 mx-auto">
          <div
            v-for="item in $page.strapiTag.posts"
            class="post-preview"
            :key="item.id"
          >
            <g-link :to="`/post/${item.id}`">
              <h2 class="post-title">
                {{ item.title }}
              </h2>
              <h3 class="post-subtitle">
                {{ item.title }}
              </h3>
            </g-link>
            <hr />
          </div>
        </div>
      </div>
    </div>
  </Layout>
</template>
<page-query>
query ($id: ID!){
	strapiTag  (id: $id) {
		id
    title
    posts {
      id
      title
    }
  }
}
</page-query>

<script>
export default {
  name: 'Tag',
}
</script>
<style></style>
