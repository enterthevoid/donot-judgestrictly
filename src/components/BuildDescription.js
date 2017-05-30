function BuildDescription() {
  if (pending_id == 0) {
    return false;
  }
  var out;
  out = end_clock + ": ";
  if ($("#fumble-lost").is(":checked")) {
    out += start_poss + " fumble recovered by " + end_poss;
    if ($("#defensive-touchdown").is(":checked")) {
      out += " and returned for a TOUCHDOWN!";
    } else {
      out += ".";
    }
  } else if ($("#interception").is(":checked")) {
    out += start_poss + " pass intercepted by " + end_poss;
    if ($("#defensive-touchdown").is(":checked")) {
      out += " and returned for a TOUCHDOWN!";
    } else {
      out += ".";
    }
  } else if ($("#turnover-on-downs").is(":checked")) {
    out += start_poss + " turned the ball over on downs.";
  } else {
    if ($("#attempt-rush").is(":checked")) {
      out +=
        end_poss +
        " rush for " +
        $("#yards-gained").val() +
        " yard" +
        ($("#yards-gained").val() == 1 ? "" : "s");
      if ($("#offensive-touchdown").is(":checked")) {
        out += ", TOUCHDOWN!";
      } else if ($("#2pt-conversion").is(":checked")) {
        out += ", CONVERSION SUCCESSFUL!";
      } else if ($("#safety").is(":checked")) {
        out += ", SAFETY!";
      } else {
        out += ".";
      }
    } else if ($("#attempt-pass").is(":checked")) {
      out +=
        end_poss +
        " pass for " +
        $("#yards-gained").val() +
        " yard" +
        ($("#yards-gained").val() == 1 ? "" : "s");
      if ($("#offensive-touchdown").is(":checked")) {
        out += ", TOUCHDOWN!";
      } else if ($("#2pt-conversion").is(":checked")) {
        out += ", CONVERSION SUCCESSFUL!";
      } else if ($("#safety").is(":checked")) {
        out += ", SAFETY!";
      } else {
        out += ".";
      }
    } else if ($("#attempt-penalty").is(":checked")) {
      out +=
        "Penalty enforced for " +
        $("#yards-gained").val() +
        " yard" +
        ($("#yards-gained").val() == 1 ? "" : "s");
    } else if ($("#attempt-punt").is(":checked")) {
      if ($("#special-teams-touchdown").is(":checked")) {
        out +=
          start_poss + " punt returned by " + end_poss + " for a TOUCHDOWN!";
      } else {
        out += start_poss + " punt returned to the " + end_location + ".";
      }
    } else if ($("#attempt-kickoff").is(":checked")) {
      if ($("#special-teams-touchdown").is(":checked")) {
        out += start_poss + " kickoff returned for a TOUCHDOWN!";
      } else {
        out += start_poss + " kickoff returned to the " + end_location + ".";
      }
    } else if ($("#attempt-sack").is(":checked")) {
      out +=
        start_poss +
        " is sacked for a loss of " +
        Math.abs($("#yards-gained").val());
      if ($("#safety").is(":checked")) {
        out += " for a SAFETY!";
      } else {
        out += ".";
      }
    } else if ($("#attempt-extrapoint").is(":checked")) {
      if ($("#extra-point").is(":checked")) {
        out += start_poss + " extra point is GOOD!";
      } else {
        out += start_poss + " extra point attempt FAILED!";
      }
    } else if ($("#attempt-fieldgoal").is(":checked")) {
      if ($("#field-goal").is(":checked")) {
        out += start_poss + " field goal is GOOD!";
      } else {
        out += start_poss + " field goal attempt FAILED!";
      }
    }
  }
  $("#description").val(out);
}
