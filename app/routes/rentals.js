import Ember from 'ember';

export default Ember.Route.extend({
  model() {
    return [
      {
        ticket: null,
        commit: {
        id: "bf1fb448f00a17271ea8f82fec24af52fd48f244",
        url: "https://github.com/Goji-P2P/admin-ui/commit/bf1fb448f00a17271ea8f82fec24af52fd48f244",
        author: {
        username: "ed.slocombe@googlemail.com",
        name: "Ed Slocombe"
        },
        dateTime: "2017-04-03T16:19:03Z",
        message: "Include account on cash transaction model",
        application: "ADMIN_UI"
      }
    },
    {
        ticket: null,
        commit: {
        id: "a72f5fe18620f0c2b136f9ebd118ff4e23048784",
        url: "https://github.com/Goji-P2P/admin-ui/commit/a72f5fe18620f0c2b136f9ebd118ff4e23048784",
        author: {
        username: "ed.slocombe@googlemail.com",
        name: "Ed Slocombe"
        },
        dateTime: "2017-04-03T16:18:33Z",
        message: "Change workflow URL to include originator ID and client ID",
        application: "ADMIN_UI"
      }
    },
    {
        ticket: null,
        commit: {
        id: "cc04f6fcd2925e599459372f9827e426cf34a024",
        url: "https://github.com/Goji-P2P/admin-ui/commit/cc04f6fcd2925e599459372f9827e426cf34a024",
        author: {
        username: "ed.slocombe@googlemail.com",
        name: "Ed Slocombe"
        },
        dateTime: "2017-04-03T10:36:27Z",
        message: "Changed URL to get generated cover letter document",
        application: "ADMIN_UI"
      }
    },
    {
        ticket: null,
        commit: {
        id: "2cded9d80ae40edcb5c4b90ecbb1394d72252292",
        url: "https://github.com/Goji-P2P/admin-ui/commit/2cded9d80ae40edcb5c4b90ecbb1394d72252292",
        author: {
        username: "ed.slocombe@googlemail.com",
        name: "Ed Slocombe"
        },
        dateTime: "2017-03-31T15:13:56Z",
        message: "Changed URL to get generated cover letter document",
        application: "ADMIN_UI"
      }
    },
    {
        ticket: null,
        commit: {
        id: "2adf70e78ce6980c3077b2cadda4d1f86774dec6",
        url: "https://github.com/Goji-P2P/admin-ui/commit/2adf70e78ce6980c3077b2cadda4d1f86774dec6",
        author: {
        username: "ed.slocombe@googlemail.com",
        name: "Ed Slocombe"
        },
        dateTime: "2017-03-30T14:55:54Z",
        message: "Remove workflow component to allow release to production",
        application: "ADMIN_UI"
      }
    },
    {
        ticket: null,
        commit: {
        id: "ea66c7099b376c0fe8ef9f7d4b2b78e381a2bf82",
        url: "https://github.com/Goji-P2P/admin-ui/commit/ea66c7099b376c0fe8ef9f7d4b2b78e381a2bf82",
        author: {
        username: "davidgenn@gojiholdings.com",
        name: "David Genn"
        },
        dateTime: "2017-03-30T14:24:56Z",
        message: "Add ability to void an ISA cancellation",
        application: "ADMIN_UI"
      }
    },
    {
        ticket: null,
        commit: {
        id: "a395f240a2356b7dd673f3c5334900100d52abce",
        url: "https://github.com/Goji-P2P/admin-ui/commit/a395f240a2356b7dd673f3c5334900100d52abce",
        author: {
        username: "ed.slocombe@googlemail.com",
        name: "Ed Slocombe"
        },
        dateTime: "2017-03-28T17:35:38Z",
        message: "ISA manager cover letter generator for transfer in workflows",
        application: "ADMIN_UI"
      }
    },
    {
        ticket: null,
        commit: {
        id: "d0d0450572072242003cc05b969fd7b00dc36f04",
        url: "https://github.com/Goji-P2P/admin-ui/commit/d0d0450572072242003cc05b969fd7b00dc36f04",
        author: {
        username: "ed.slocombe@googlemail.com",
        name: "Ed Slocombe"
        },
        dateTime: "2017-03-28T13:28:59Z",
        message: "Change versions of tether and commit to see if all tests are now passing",
        application: "ADMIN_UI"
      }
    }
];
    // return [{
    //   id: 'grand-old-mansion',
    //   title: 'Grand Old Mansion',
    //   owner: 'Veruca Salt',
    //   city: 'San Francisco',
    //   type: 'Estate',
    //   bedrooms: 15,
    //   image: 'https://upload.wikimedia.org/wikipedia/commons/c/cb/Crane_estate_(5).jpg',
    //   description: 'This grand old mansion sits on over 100 acres of rolling hills and dense redwood forests.'
    // }, {
    //   id: 'urban-living',
    //   title: 'Urban Living',
    //   owner: 'Mike TV',
    //   city: 'Seattle',
    //   type: 'Condo',
    //   bedrooms: 1,
    //   image: 'https://upload.wikimedia.org/wikipedia/commons/0/0e/Alfonso_13_Highrise_Tegucigalpa.jpg',
    //   description: 'A commuters dream. This rental is within walking distance of 2 bus stops and the Metro.'
    //
    // }, {
    //   id: 'downtown-charm',
    //   title: 'Downtown Charm',
    //   owner: 'Violet Beauregarde',
    //   city: 'Portland',
    //   type: 'Apartment',
    //   bedrooms: 3,
    //   image: 'https://upload.wikimedia.org/wikipedia/commons/f/f7/Wheeldon_Apartment_Building_-_Portland_Oregon.jpg',
    //   description: 'Convenience is at your doorstep with this charming downtown rental. Great restaurants and active night life are within a few feet.'
    //
    // }];

  }
});
