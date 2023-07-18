function skillsMember() {
    var member = {
        name: 'John',
        age: 30,
        skills: ['JavaScript', 'HTML', 'CSS'],
        salary: 40000,
        getSalary: function () {
            return this.salary;
        },
        setSalary: function (value) {
            this.salary = value;
        }
    };
    return member;
}