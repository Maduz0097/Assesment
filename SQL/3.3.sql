SELECT u.firstName, u.lastName
FROM `user` u
         LEFT JOIN groupMembership gm ON u.id = gm.userID
         LEFT JOIN `groups` g ON gm.groupID = g.id
         LEFT JOIN (
    SELECT gm2.userID
    FROM groupMembership gm2
             LEFT JOIN `groups` g2 ON gm2.groupID = g2.id
    WHERE g2.name LIKE 'TEST%'
) test_members ON u.id = test_members.userID
WHERE u.firstName = 'Victor' AND test_members.userID IS NULL;