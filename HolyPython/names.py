
users = {
 'Students': [
     {'first_name':  'Michael', 'last_name' : 'Jordan'},
     {'first_name' : 'John', 'last_name' : 'Rosales'},
     {'first_name' : 'Mark', 'last_name' : 'Guillen'},
     {'first_name' : 'KB', 'last_name' : 'Tonel'}
  ],
 'Instructors': [
     {'first_name' : 'Michael', 'last_name' : 'Choi'},
     {'first_name' : 'Martin', 'last_name' : 'Puryear'}
  ]
 }
for key in users:
    print key.upper()
    for i in range(len(users[key])):
        print i+1, users[key][i]["first_name"].upper(), users[key][i]["last_name"].upper(), len(users[key][i]["first_name"]+ users[key][i]["last_name"])