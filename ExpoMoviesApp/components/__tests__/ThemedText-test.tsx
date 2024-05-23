import * as React from "react"
import renderer from "react-test-renderer"

import { ThemedText } from "../ThemedText"

it(`renders correctly`, () => {
  const tree = renderer.create(<ThemedText>Snapshot test!</ThemedText>).toJSON()

  expect(tree).toMatchSnapshot()
})

it(`renders correctly with 'title'`, () => {
  const tree = renderer
    .create(<ThemedText type="title">Snapshot test!</ThemedText>)
    .toJSON()

  expect(tree).toMatchSnapshot()
})

it(`renders correctly`, () => {
  const tree = renderer
    .create(<ThemedText type="defaultSemiBold">Snapshot test!</ThemedText>)
    .toJSON()

  expect(tree).toMatchSnapshot()
})
it(`renders correctly`, () => {
  const tree = renderer
    .create(<ThemedText type="subtitle">Snapshot test!</ThemedText>)
    .toJSON()

  expect(tree).toMatchSnapshot()
})
it(`renders correctly`, () => {
  const tree = renderer
    .create(<ThemedText type="link">Snapshot test!</ThemedText>)
    .toJSON()

  expect(tree).toMatchSnapshot()
})
