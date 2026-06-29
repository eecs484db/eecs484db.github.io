// Show fake Project 6 on April 1

(function () {
  showAprilFoolsContent();
})();

function showAprilFoolsContent() {
  var currentDate = moment();
  if (currentDate.date() === 1 && currentDate.month() === 3) {
    // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date/getMonth
    // Note that month numbers are zero-indexed, so 3 actually indicates April!
    const P6_card = `
      <div class="ui card">
        <div class="content" style="flex-grow: 0;">
          <div class="header">Project 6</div>
        </div>
        <div class="content">
          <h4 class="ui header">Distributed Computing Architecture</h4>
          <div class="right aligned floating ui red label">
            Due April 1
          </div>
          <div class="ui small feed">
            <div class="event">
              <div class="content">
                <div class="summary">
                  <a class="ui label" href="http://bit.ly/eecs485-p6" target="_blank">
                    <i class="file alternate icon"></i>
                    Spec
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
        `;
    document.getElementsByClassName("ui three stackable cards")[0].innerHTML +=
      P6_card;
  }
}
