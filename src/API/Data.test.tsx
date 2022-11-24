import { _saveQuestion, _saveQuestionAnswer } from './_DATA'

describe('Test API _DATA', () => {
	it('verify that the saved question is returned and all expected fields are populated', async () => {
		const inputData = {
			optionOneText: 'would you decide for one',
			optionTwoText: 'would you decide for two',
			author: 'mtsamis',
		}

		const data = await _saveQuestion(inputData)

		expect(data).toEqual({
			id: data.id,
			timestamp: data.timestamp,
			author: inputData.author,
			optionOne: {
				votes: [],
				text: inputData.optionOneText,
			},
			optionTwo: {
				votes: [],
				text: inputData.optionTwoText,
			},
		})
	})

	it('verify that an error is returned if incorrect data is passed to the function', async () => {
		const inputData = {
			optionOneText: 'would you decide for one',
			author: 'mtsamis',
		}

		await expect(_saveQuestion(inputData)).rejects.toEqual(
			'Please provide optionOneText, optionTwoText, and author'
		)
	})

	it('verify that the saved question answer is returned and all expected fields are populated', async () => {
		const inputData = {
			authedUser: 'mtsamis',
			qid: 'xj352vofupe1dqz9emx13r',
			answer: 'optionTwo',
		}

		const data = await _saveQuestionAnswer(inputData)

		expect(data).toEqual(true)
	})

	it('verify that an error is ocurred if incorrect data is passed to the function', async () => {
		const inputData = {
			authedUser: 'mtsamis',
			qid: undefined,
			answer: 'optionTwo',
		}

		await expect(_saveQuestionAnswer(inputData)).rejects.toEqual(
			'Please provide authedUser, qid, and answer'
		)
	})
})
