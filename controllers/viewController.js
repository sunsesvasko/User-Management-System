exports.getOverview = (req, res) => {
    res.status(200).render('users', {
        title: 'User Management System'
    });
}

exports.getNewUserForm = (req, res) => {
    res.status(200).render('newUser', {
        title: 'Create New User'
    });
}

exports.getUpdateUserForm = (req, res) => {
    res.status(200).render('updateUser', {
        title: 'Update a User'
    });
}