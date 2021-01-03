const upperCase = question => {
  return question.charAt(0).toUpperCase() + question.slice(1);
}

const goodBad = question => {
  if (question.toLowerCase() === 'yes') {
    return this.isEvil = 'true';
  } else if (question.toLowerCase() === 'no') {
    return this.isEvil = 'false';
  } else {
    return this.isEvil = "Don't know";
  }
}

const askMembers = question => {
  const re = /,/g;

  if (re.test(question)) {
    let newArr = [];
    for (let i of question.split(','))
      newArr.push(' ' + upperCase(i.trim()));
    newArr[0] = newArr[0].trim();
    return newArr;
  } else {
    prompt('Write the correct names separated by coma');
  }
}

const superTeam = {
  title: upperCase(prompt('Write the name of the team')),
  leader: upperCase(prompt("Write the name of team's leader")),
  members: askMembers(prompt('Write the names of members separated by coma')),
  memberCount: function() {
    return this.leader.trim().split(' ').length + this.members.length;
  },
  agenda: upperCase(prompt('What is their agenda?')),
  isEvil: goodBad(prompt('Is it evil? Yes/no'))
}

alert(`Here is the team:
name - ${superTeam.title}
leader - ${superTeam.leader}
members - ${superTeam.members}
memberCount - ${superTeam.memberCount()}
agenda - ${superTeam.agenda}
isEvil - ${superTeam.isEvil}`);