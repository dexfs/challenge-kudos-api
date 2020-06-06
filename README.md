# How to run the code

```bash
# install dependencies using yarn or npm
$ npm install
```

## Run dev

```bash
$ npm run dev
```

## Build production

```bash
$ npm run build
```

The code will be on builds directory and you can run with

```bash
$ node builds/server.js
```

# Explanation of architecture and API design

I decide to use REST because is the way I'm confort and I'm using during my day and jobs.
Beside of that, it's a common and easy design to apply.
I decided to use express, because is a micro-framework and famous, it's really easy to find any solution to problem we have, good libraries, middlewares ( I used a little bit).

layers

- controller
  - I'm using controller because I believe is a good way to separate responsibilities.
- service
  - Here is the place I fetch and treat the data from Github or any services need.
- utils
  - Here are helpers that I can use in my entire application.
- configs
  - I'm using here to put configs in general

I'm using [sucrase](https://github.com/alangpierce/sucrase) to ES6 import support, it's a babel alternative to run in dev environment, and using babel to build production code.

# If you had more time, what would you like to improve?

If I had more time

- I would improve applying server graphQL,
- I would use Typescript
- Depends on the rules, apply a cache with expiration, but avoiding fetch data to same repo in short time period.

# response

```json
{
  "data": {
    "2020-03-31": {
      "bvaughn": [
        {
          "commitsCount": 1,
          "commits": [
            {
              "sha": "f4cc970276ee7d66db54191b626b19c721ebaa91",
              "commit": {
                "author": {
                  "name": "Brian Vaughn",
                  "email": "bvaughn@fb.com",
                  "date": "2020-03-31T17:05:15Z"
                },
                "message": "Enable new passive effect behavior for FB builds (#18444)\n\n* Enable new passive effect behavior for FB builds\r\n\r\nPreviously this behavior was controlled by GKs. This PR updates the flags to be enabled statically. It also enables the flags in the test builds."
              }
            }
          ]
        }
      ],
      "gaearon": [
        {
          "commitsCount": 3,
          "commits": [
            {
              "sha": "9065e02d66a86466d687a888c78710728cff652b",
              "commit": {
                "author": {
                  "name": "Dan Abramov",
                  "email": "dan.abramov@gmail.com",
                  "date": "2020-03-31T14:55:30Z"
                },
                "message": "Fix a warning typo (#18443)"
              }
            },
            {
              "sha": "1960131f11196325ff47458355d25071049aaa7a",
              "commit": {
                "author": {
                  "name": "Dan Abramov",
                  "email": "dan.abramov@gmail.com",
                  "date": "2020-03-31T10:43:01Z"
                },
                "message": "Add opt-in support for dangerous autofix (#18437)"
              }
            },
            {
              "sha": "da54641a1022edc789c0290e6aa6421d6b9543c0",
              "commit": {
                "author": {
                  "name": "Dan Abramov",
                  "email": "dan.abramov@gmail.com",
                  "date": "2020-03-31T01:09:32Z"
                },
                "message": "[ESLint] Check deps when callback body is outside the Hook call, too (#18435)\n\n* Refactor: visit CallExpression\r\n\r\nInstead of visiting the functions and looking up to see if they're in a Hook call, visit Hook calls and look down to see if there's a callback inside. I will need this refactor so I can visit functions declared outside the call.\r\n\r\n* Check deps when callback body is outside the Hook call\r\n\r\n* Handle the unknown case"
              }
            }
          ]
        }
      ],
      "acdlite": [
        {
          "commitsCount": 1,
          "commits": [
            {
              "sha": "90e90ac8e0d16113b9566ef5feea3da11e5f4458",
              "commit": {
                "author": {
                  "name": "Andrew Clark",
                  "email": "git@andrewclark.io",
                  "date": "2020-03-31T02:16:28Z"
                },
                "message": "Revert useEvent PRs (#18438)\n\n* Revert \"ReactDOM.useEvent: enable on internal www and add inspection test (#18395)\"\r\n\r\nThis reverts commit e0ab1a429d178d86e13f073f8451d24033bc1838.\r\n\r\n* Revert \"ReactDOM.useEvent: Add support for experimental scopes API (#18375)\"\r\n\r\nThis reverts commit a16b34974508cd23ce0844ad09a0e37a879d5591.\r\n\r\n* ReactDOM.useEvent: Add support for experimental scopes API"
              }
            }
          ]
        }
      ]
    },
    "2020-03-30": {
      "gaearon": [
        {
          "commitsCount": 2,
          "commits": [
            {
              "sha": "bf30e370a503cc5787a0b20e9d50ece6a148d6c9",
              "commit": {
                "author": {
                  "name": "Dan Abramov",
                  "email": "dan.abramov@gmail.com",
                  "date": "2020-03-30T23:29:53Z"
                },
                "message": "Remove User Timings (#18417)"
              }
            },
            {
              "sha": "1f8c40451ae15107abcdecb1ee67b2ed8f9d008e",
              "commit": {
                "author": {
                  "name": "Dan Abramov",
                  "email": "dan.abramov@gmail.com",
                  "date": "2020-03-30T15:07:58Z"
                },
                "message": "Make interaction tracing on by default in all WWW builds (#18419)"
              }
            }
          ]
        }
      ],
      "rickhanlonii": [
        {
          "commitsCount": 1,
          "commits": [
            {
              "sha": "dd7e5e4f5ac2ffac3171ef61daee2cb1edc69635",
              "commit": {
                "author": {
                  "name": "Ricky",
                  "email": "rickhanlonii@gmail.com",
                  "date": "2020-03-30T19:42:41Z"
                },
                "message": "Add getInspectorDataForViewAtPoint (take two) (#18388)\n\n* Add getInspectorDataForViewAtPoint (take two)\r\n\r\n* Updates from review\r\n\r\n* Add DEV to dev-only variable\r\n\r\n* Missed this rename"
              }
            }
          ]
        }
      ],
      "acdlite": [
        {
          "commitsCount": 1,
          "commits": [
            {
              "sha": "d7382b6c43b63ce15ce091cf13db8cd1f3c4b7ae",
              "commit": {
                "author": {
                  "name": "Andrew Clark",
                  "email": "git@andrewclark.io",
                  "date": "2020-03-30T18:25:04Z"
                },
                "message": "Bugfix: Do not unhide a suspended tree without finishing the suspended update (#18411)\n\n* Bugfix: Suspended update must finish to unhide\r\n\r\nWhen we commit a fallback, we cannot unhide the content without including\r\nthe level that originally suspended. That's because the work at level\r\noutside the boundary (i.e. everything that wasn't hidden during that\r\nrender) already committed.\r\n\r\n* Test unblocking with a high-pri update"
              }
            }
          ]
        }
      ]
    },
    "2020-03-29": {
      "eps1lon": [
        {
          "commitsCount": 1,
          "commits": [
            {
              "sha": "ba31ad40a9c6495e0d42def270178a7a74990c27",
              "commit": {
                "author": {
                  "name": "Sebastian Silbermann",
                  "email": "silbermann.sebastian@gmail.com",
                  "date": "2020-03-29T22:13:46Z"
                },
                "message": "feat(StrictMode): Double-invoke render for every component (#18430)\n\n* feat(StrictMode): Double-invoke render for every component\r\n\r\n* fix: Mark ReactTestRendererAsync as internal"
              }
            }
          ]
        }
      ],
      "sebmarkbage": [
        {
          "commitsCount": 1,
          "commits": [
            {
              "sha": "689d27586e30f94be1b7a7bb634b82633c2baf42",
              "commit": {
                "author": {
                  "name": "Sebastian Markbåge",
                  "email": "sema@fb.com",
                  "date": "2020-03-29T17:13:17Z"
                },
                "message": "Reset lastEffect when resuming SuspenseList (#18412)\n\nWe store an effect pointer so we can backtrack in the effect list in some\r\ncases. This is a stateful variable. If we interrupt a render we need to\r\nreset it.\r\n\r\nThis field was added after the optimization was added and I didn't remember\r\nto reset it here.\r\n\r\nOtherwise we end up not resetting the firstEffect so it points to a stale\r\nlist. As a result children don't end up inserted like we think they were.\r\nThen we try to remove them it errors.\r\n\r\nIt would be nicer to just get rid of the effect list and use the tree for\r\neffects instead. Maybe we still need something for deletions tho."
              }
            }
          ]
        }
      ],
      "rodrigograca31": [
        {
          "commitsCount": 1,
          "commits": [
            {
              "sha": "1af2a10891cad4d6bd1f9489dc52f83b16099041",
              "commit": {
                "author": {
                  "name": "Rodrigo Graça",
                  "email": "1134310+rodrigograca31@users.noreply.github.com",
                  "date": "2020-03-29T14:18:52Z"
                },
                "message": "https link to editorconfig.org (#18421)"
              }
            }
          ]
        }
      ],
      "AshoneA": [
        {
          "commitsCount": 1,
          "commits": [
            {
              "sha": "d7918f4a9b74a44aa9d665b5860db76914615f89",
              "commit": {
                "author": {
                  "name": "zefeng",
                  "email": "zefengbao@outlook.com",
                  "date": "2020-03-29T14:18:15Z"
                },
                "message": "chore: npm link more directly (#18428)"
              }
            }
          ]
        }
      ]
    }
  }
}
```
