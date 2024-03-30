/**
 * @swagger
 * /boards:
 *   get:
 *      summary : 게시글 가져오기
 *      tags: [Board]
 *      parameters:
 *          - in: 게시글id
 *            name: number
 *            type: int
 *      responses:
 *          200:
 *           description : 성공
 *           content:
 *              application/json:
 *                  schema:
 *                      type: array
 *                      items:
 *                          properties:
 *                              number:
 *                                  type: int
 *                                  example: 1
 *                              writer:
 *                                  type: string
 *                                  example: 철수
 *                              title:
 *                                  type: string
 *                                  example: 좋은아침~
 *                              contents:
 *                                  type: string
 *                                  example: 오늘도화이팅하세용~
 *
 */
