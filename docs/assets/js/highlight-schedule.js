// A script that highlights the current week in the home page's schedule.

function highlightCurrentWeek() {
  const today = new Date();
  const currentDay = today.getDate();
  const currentMonthNum = today.getMonth() + 1; // js months are 0-indexed

  const weeks = document.getElementById("schedule-table");
  if (!weeks) {
    console.error("Missing an element with id schedule-table.");
    return;
  }

  const months = {
    Jan: 1,
    Feb: 2,
    Mar: 3,
    Apr: 4,
    May: 5,
    Jun: 6,
    Jul: 7,
    Aug: 8,
    Sep: 9,
    Oct: 10,
    Nov: 11,
    Dec: 12,
  };

  for (const week of weeks.children) {
    const weekTitleAndDates = week.children[0];
    if (!weekTitleAndDates) {
      console.error(
        "Schedule does not have appropriate HTML structure. It should have <tr> elements for rows that contain <td> elements for columns."
      );
      return;
    }

    // Parse a line from a row
    //   Example: "Week 13\nApr 7 - 11"
    let line = weekTitleAndDates.innerText
    line = line.replace(/\n/g, ' ' );  // Remove newlines
    if (!line) {
      console.error(
        "The first column of the schedule is in the wrong text format. It should be: 'Week #\nMonth Date - [Month] Date'"
      );
      return;
    }

    // Extract month(s) and days from a string
    //   Examples: "Mar 31 - Apr 4" or "Jan 8 - 12"
    const match = /([a-z]+)\s+(\d+)\s*-\s*([a-z]+)?\s+(\d+)/i.exec(line);

    // Skip this row if there's no match
    if (!match) {
      continue;
    }

    // Extract day and month, convert to numbers
    // Regex capture groups (match[0]...)
    // [0]=full match, [1]=startMonth, [2]=startDay, [3]=endMonth, [4]=endDay
    const startMonthNum = months[match[1]];
    const startDay = parseInt(match[2]);
    const endMonthNum = match[3] ? months[match[3]] : startMonthNum;  // "Jan 8 - 12"
    const endDay = parseInt(match[4]);

    // Convert start and end dates to integers for easy comparison.  It's
    // not exactly a day of the year, but it's monotonically increasing.
    //   Examples: "Sep 29" -> 929, "Oct 3" -> 1003
    // Include the weekend by adding 2 to the end day.  This is the same as
    // "weeks start on  Monday".
    const currentDayInt = currentMonthNum * 100 + currentDay
    const startDayInt = startMonthNum * 100 + startDay;
    const endDayInt = endMonthNum * 100 + endDay + 2;

    // Check if today falls within the date range
    // console.log(`${startMonthNum}/${startDay} - ${endMonthNum}/${endDay}`); // DEBUG
    if (currentDayInt >= startDayInt && currentDayInt <= endDayInt) {
      week.id = "highlighted-week";
      return; // Only highlight one week
    }

  }

}

window.addEventListener("load", highlightCurrentWeek);
