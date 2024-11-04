function createLoading(delay = 200) {
  const loading = document.querySelector(".loading");
  const elLoading = document.querySelector(".el-loading");

  while (loading.children.length > 30) {
    const allElLoading = document.querySelectorAll(".el-loading");
    allElLoading.forEach((el) => el.remove());
  }

  const newElLoading = elLoading.cloneNode(true);
  loading.append(newElLoading);

  setTimeout(() => createLoading(delay), delay);
}

createLoading();
