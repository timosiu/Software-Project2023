CREATE TABLE IF NOT EXISTS `users` (
  `id` varchar(36) NOT NULL,
  `name` varchar(100) NOT NULL,
  `email` varchar(50) NOT NULL,
  `password` varchar(60) NOT NULL,
  `created` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `updated` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`)
) ENGINE = InnoDB DEFAULT CHARSET = latin1;
CREATE TABLE IF NOT EXISTS `locations` (
  `id` varchar(36) NOT NULL,
  `provider_id` varchar(36) NOT NULL,
  `city` varchar(50) NOT NULL,
  `country` varchar(50) NOT NULL,
  `title` varchar(50) NOT NULL,
  `description` varchar(255),
  `comforts` varchar(255),
  `price` FLOAT NOT NULL,
  `created` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `updated` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`)
) ENGINE = InnoDB DEFAULT CHARSET = latin1;
CREATE TABLE IF NOT EXISTS `location_images` (
  `id` varchar(36) NOT NULL,
  `location_id` varchar(36) NOT NULL,
  `image` varchar(200) NOT NULL,
  `created` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `updated` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`)
) ENGINE = InnoDB DEFAULT CHARSET = latin1;
INSERT INTO `users` (`id`, `name`, `email`, `password`)
VALUES (
    1,
    'Test User',
    'test@user.com',
    '$2a$12$stzoKdDeAhklwUiwIKyK7./Ijl3L03UxMyKg.ElzCrgQCW9wkA7Wi'
  );
INSERT INTO `users` (`id`, `name`, `email`, `password`)
VALUES (
    2,
    'Matti Meikalainen',
    'matti@meikalainen.com',
    '$2a$12$stzoKdDeAhklwUiwIKyK7./Ijl3L03UxMyKg.ElzCrgQCW9wkA7Wi'
  );
INSERT INTO `locations` (`id`, `provider_id`, `city`, `country`, `title`, `description`, `comforts`, `price`)
VALUES (
    1,
    1,
    'Kajaani',
    'Finland',
    'Farmhouse with asd',
    'Description text asdasdasdasdasdasdasd',
    '{"bathtub":true,"microwave":false,"refrigerator":true,"beach":true}',
    80
  );
INSERT INTO `locations` (`id`, `provider_id`, `city`, `country`, `title`, `description`, `comforts`, `price`)
VALUES (
    2,
    1,
    'Inari',
    'Finland',
    'Cabin by the lake',
    'Description text asdasdasdasdasdasdasd',
    '{"bathtub":false,"microwave":false,"refrigerator":false,"beach":true}',
    75
  );
INSERT INTO `location_images` (`id`, `location_id`, `image`)
VALUES (
    1,
    1,
    'https://a0.muscache.com/im/pictures/6094ab16-9889-431d-b3f7-20d37006f720.jpg?im_w=1440'
  );
INSERT INTO `location_images` (`id`, `location_id`, `image`)
VALUES (
    2,
    2,
    'https://a0.muscache.com/im/pictures/aab97265-a1e5-464c-bcf2-faffadf6d38f.jpg?im_w=1200'
  );
INSERT INTO `location_images` (`id`, `location_id`, `image`)
VALUES (
    3,
    2,
    'https://a0.muscache.com/im/pictures/ef0c8000-c12e-43db-9d09-1bb6a9f34c87.jpg?im_w=1440'
  );
