// divide.test.js
const card = require('./services/card');
const expectResultGetAll = [{
        id: 10,
        name: "card1",
        availableFrom: "20/2/18",
        availableTo: "24/2/18",
        templateProperties: {
            textsInCard: [
                "card1Text",
                {
                    textsObject: "super_text"
                }
            ]
        }
    },{
        id: 11,
        name: "card2",
        availableFrom: "20/2/18",
        availableTo: "24/2/18",
        templateProperties: {
            feeds: [
                {
                    matchId: [
                        "5",
                        "6",
                        "7",
                        "8"
                    ]
                },
                "matchPoint"
            ]
        }
    },{
        id: 12,
        name: "card3",
        availableFrom: "20/2/18",
        availableTo: "24/2/18",
        templateProperties: {
            availableOnPlatform: {
                android: true,
                ios: true,
                web: true
            }
        }
    }
]
const expectResultGetTwelve = {
    0: {
        id: 12,
        name: "card3",
        availableFrom: "20/2/18",
        availableTo: "24/2/18",
        templateProperties: {
            availableOnPlatform: {
                android: true,
                ios: true,
                web: true
            }
        }
    }
}
const moment = require('moment');

test('Get All Cards Function', async () => {
  let cardResult = await card.getAll();
  expect(cardResult).toEqual(expectResultGetAll);
});

test('Retrieve Card', async () => {
  let input = { params: { id: '12' } }
  let cardResult = await card.getUser(input);
  expect(cardResult).toEqual(expectResultGetTwelve);
});
//
test('Create Card Function', async () => {
  let input = {
    body : {
      id: 4,
      name: "card1",
      available_from: "2018-02-20",
      available_to: "2018-02-24",
      template_properties: {
      	feeds:[
      		{
      			matchId:[
      				"5","6","7","8"
      			]

      		},
      	"matchpoint"
      	]
      },
      created_at: moment().toISOString(),
      updated_at: moment().toISOString(),
      deleted_at: null
    }
  }
  let cardResult = await card.create(input);
  expect(cardResult[0].id).toBe(4)
});

test('Update Card Function', async () => {
  let input = {
    body : {
      id: 4,
      template_properties: {}
    }
  }
  let cardResult = await card.update(input);
  expect(cardResult.detail[0].template_properties).toEqual({});
});
//
test('Delete Card Function', async () => {
  let input = {
    body : {
      id : 4
    }
  }
  let cardResult = await card.delete(input);
  expect(cardResult.response).toBe('Success');
});
//
