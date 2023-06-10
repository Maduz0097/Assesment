SELECT u.firstName, u.lastName, g.name AS groupName
FROM `user` u
         JOIN groupMembership gm ON u.id = gm.userID
         JOIN `groups` g ON gm.groupID = g.id
WHERE u.created < g.created;