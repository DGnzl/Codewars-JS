function toFreud(string) {
    if (string.length == 0) {
      return "";
    }
    let ans = [];
    const len = string.split(" ").length;
    for (let i = 0; i < len; i++) {
      ans.push("sex");
    }
    return ans.join(" ");
  }