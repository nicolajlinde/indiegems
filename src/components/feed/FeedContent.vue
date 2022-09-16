<template>
  <section id="feed-background">
    <div id="content">
      <div class="feed-wrapper">
        <div class="row">
          <div class="column feed-content">
            <div class="row">
              <div class="column">
                <div style="background: red">Big Feed</div>
              </div>
            </div>
            <div class="row">
              <div class="column">
                <div style="background: greenyellow">Big Feed</div>
              </div>
              <div class="column">
                <div style="background: green">Big Feed</div>
              </div>
            </div>
          </div>
          <div class="column sidebar-content">
            <div>1</div>
            <div>2</div>
            <div>3</div>
            <div>4</div>
            <div>5</div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
ul {
  list-style: none;
  margin: 0;
  padding: 0;
}

li {
  width: 100%;
  background: purple;
  margin: 10px 0;
  padding: 15px 0;
}

li:first-child {
  margin-top: 0;
}

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

.sidebar-content div {
  background: purple;
  border-bottom: 1px solid black;
}

.sidebar-content div:last-child {
  border-bottom: none;
}

.column div {
  height: 100%;
  width: 100%;
}
</style>
