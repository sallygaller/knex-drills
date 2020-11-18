INSERT INTO blogful_articles
    (title, content, date_published)
VALUES
    ('Cooking at home',                             'This is how you cook at home.',                                                now() - '5 days'::INTERVAL),
    ('Cooking and dancing at home',                 'This is how you cook AND dance at home.',                                      now() - '3 days'::INTERVAL), 
    ('How I learned to stop doing things at home',  'It was a journey but I got there in the end.',                                 now() - '15 days'::INTERVAL),
    ('10 things to Cook at Thanksgiving',           'This is a list of ten things to cook at Thanksgiving, mostly pies.',           now() - '7 days'::INTERVAL),
    ('30 things to Cook at Christmas',              'People will be asking you to stop cooking but you should show no mercy.',      now() - '3 days'::INTERVAL),
    ('Cross-Stitching',                             'It is the latest craze. Here is how to get started',                           now() - '12 days'::INTERVAL),
    ('Knitting',                                    'Knitting is the latest, LATEST craze.',                                        '2020-05-05 21:00:00'),
    ('Wildlife in the Garden',                      'Here is how to take care of the wildlife in your garden.',                     '2020-09-05 03:00:00'),
    ('Make Your Own Clothes',                       'Prepare yourself for an emotional rollercoaster.',                             '2020-02-10 23:00:00'),
    ('Build Your Own House',                        'This is not recommended but we cannot stop you.',                              '2020-01-03 09:00:00'),
    ('How to Identify Birdsong',                    'Blackbirds, robins, wagtails, oh my.',                                         now() - '12 days'::INTERVAL),
    ('How to Make Your Own Candles',                'This is how to make your own candles using beeswax and imagination.',          now() - '13 days'::INTERVAL), 
    ('Baking the Perfect Victoria Sponge',          'The secret is in the jam.',                                                    now() - '12 days'::INTERVAL),
    ('Baking the Perfect Chocolate Cake',           'The secret is in the chocolate',                                               now() - '45 days'::INTERVAL),
    ('How to Fry the Perfect Egg',                  'The secret is in the egg.',                                                    now() - '13 days'::INTERVAL),
    ('How to Cook an Omelette',                     'It is not going to be pretty, but it will be delicious.',                       now() - '15 days'::INTERVAL),
    ('When You Are Running Low on Ideas',           'Excepteur sint occaecat cupidatat non proident.',                              '2017-09-02 21:00:00'),
    ('How to Make a Picnic',                        'Duis aute irure dolor in reprehenderit.',                                      '2020-09-05 04:00:00'),
    ('How to Make a Smoothie',                      'Ut enim ad minim veniam.',                                                     '2016-02-10 22:00:00'),
    ('How to Make a Cup of Tea',                    'It takes years and years of practice.',                                        '2018-02-15 13:00:00')
    ;

