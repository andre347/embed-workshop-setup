const list = document.getElementById("stepList");

const content = [
  {
    title: "Basic Embedding",
    codesanboxURL:
      "https://codesandbox.io/s/01-basic-embedding-h1k3s?file=/index.html",
    text:
      "In this section you'll learn how quickly you can get up and running with Embedding! This section covers two ways of embedding Tableau content in your webpage: the embed snippet & the iFrame code. The latter can be used if you are unable to use JavaScript in your page. This is often the case when you embed Tableau in a CMS system.",
  },
  {
    title: "Using the Tableau JavaScript API",
    codesanboxURL:
      "https://codesandbox.io/s/02-using-the-tableau-javascript-api-65jmn?file=/index.html",
    text:
      "In order to fully leverage the capabilities of your web application and Tableau you should use the official JavaScript API. This is a client-side JS library that allows you to fully integrate and interact with the content on your webpage.",
  },
  {
    title: "Interact with the Tableau visualisation",
    codesanboxURL:
      "https://codesandbox.io/s/03-interact-with-the-tableau-visualisation-g38je?file=/index.html",
    text:
      "By using the Tableau JavaScript API you get a lot of possibilities in terms of interactivity. In this section we will look at the export options of Tableau dashboards. You will learn how you can give the end user the ability to export to PDF, Crosstab and PowerPoint.",
  },
  {
    title: "Filtering",
    codesanboxURL: "https://codesandbox.io/s/04-filtering-urkec",
    text:
      "When you embed Tableau content in a webpage you can also interact with Tableau filters, parameters and actions. In this section we focus on building our own dropdown filter.",
  },
  {
    title: "Dynamic Show & Hide",
    codesanboxURL: "https://codesandbox.io/s/05-dynamic-show-and-hide-5vg1v",
    text:
      "A good usecase for embedding Tableau content is to dynamically show it or swap to another visualisation depending on user interaction.",
  },
  {
    title: "getUnderlyingTableDataAsync()",
    codesanboxURL:
      "https://codesandbox.io/s/getunderlyingtabledataasync-r424s?file=/index.html",
    text:
      "You can also integrate Tableau with third-party libraries. An example of this could be D3.js. You can leverage more applications because they can share the underlying data that is powering the Tableau dashboard.",
  },
];

// loop over all the items in the array and create steps
content.forEach(({ title, codesanboxURL, text }, idx) => {
  console.log(idx);
  const element = `<li class="py-12">
                <article
                  class="space-y-2 xl:grid xl:grid-cols-4 xl:space-y-0 xl:items-baseline"
                >
                <div><p class="text-base leading-6 font-medium text-gray-500">Step ${
                  idx + 1
                }</time></p></div>
                  <div class="space-y-5 xl:col-span-3">
                    <div class="space-y-6">
                      <h2 class="text-2xl leading-8 font-bold tracking-tight">
                        <a class="text-gray-900" href="${codesanboxURL}" target="__blank"
                          >${title}</a
                        >
                      </h2>
                      <div class="prose max-w-none text-gray-600">
                        <p>
                         ${text}
                        </p>
                      </div>
                    </div>
                    <div class="text-base leading-6 font-medium">
                      <a
                        class="text-teal-500 hover:text-teal-600"
                        aria-label='Go to CodeSandbox"'
                        target="__blank"
                        href="${codesanboxURL}"
                        >Open CodeSandBox →</a
                      >
                    </div>
                  </div>
                </article>
              </li>`;
  list.innerHTML += element;
});
