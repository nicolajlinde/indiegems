<template>
  <section id="feed-background">
    <div id="content">
      <div class="feed-wrapper">
        <div class="row">
          <div class="column feed-content">
            <div class="row">
              <div class="column">1</div>
            </div>
            <div class="row">
              <div class="column">1</div>
              <div class="column">2</div>
            </div>
          </div>
          <div class="column sidebar-content">
            <!-- sidebar -->
            <ul>
              <li>1</li>
              <li>2</li>
              <li>3</li>
              <li>4</li>
              <li>5</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
#feed-background {
  width: 100%;
  background: black;
  color: white;
}

.feed-wrapper {
  display: flex;
  flex-direction: row;
}

.feed-content {
  flex: 70%;
}

.sidebar-content {
  flex: 30%;
}
</style>
