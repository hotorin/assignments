# Bug assignments (candidate)

Dear candidate,

Thank you for your interest in working with us at Telenor Digital Asia and taking the time to help us get familiar with your profressional skills.

This test is your opportunity to show of your technical excellence. It is an important part in
showing who you are and what you stand for.

In many aspects this test is more important than the resume you sent us. It tells us about the
choices you make as a developer, and how you solve problems presented to you.

## Guidelines

- Please use good programming practices when solving the problem.

- Please provide automated unit tests.

- Please submit your code as a link to a Git/Mercurial repository somewhere or a zip/tar.gz file with all the commit history.

- Please submit a solution that has the quality of your real work standards.

## Task

1. Fix bug when get call all cards (`/cards`), API return incorrect result

    - expected result

    ```json
    [
        {
            "id": 1,
            "name": "card1",
            "availableFrom": "20/2/18",
            "availableTo": "24/2/18",
            "templateProperties": {
                "textsInCard": [
                    "card1Text",
                    {
                        "textsObject": "super_text"
                    }
                ]
            }
        },
        {
            "id": 2,
            "name": "card2",
            "availableFrom": "20/2/18",
            "availableTo": "24/2/18",
            "templateProperties": {
                "feeds": [
                    {
                        "matchId": [
                            "5",
                            "6",
                            "7",
                            "8"
                        ]
                    },
                    "matchPoint"
                ]
            }
        },
        {
            "id": 3,
            "name": "card3",
            "availableFrom": "20/2/18",
            "availableTo": "24/2/18",
            "templateProperties": {
                "availableOnPlatform": {
                    "android": true,
                    "ios": true,
                    "web": true
                }
            }
        }
    ]
    ```

2. Finish CRUD function for `/cards` api endpoint

With best regards,

Telenor Digital Asia
