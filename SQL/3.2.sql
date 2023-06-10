SELECT name
FROM `groups`
WHERE name LIKE 'TEST-%' AND id NOT IN (
    SELECT groupID
    FROM groupMembership
);


