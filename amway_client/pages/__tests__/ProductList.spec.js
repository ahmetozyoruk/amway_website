import { shallowMount } from '@vue/test-utils'
import ProductList from './ProductList'
jest.mock('axios', () => ({
  get: Promise.resolve('value')
}))

it('fetches async when a button is clicked', () => {
  const wrapper = shallowMount(ProductList)
  wrapper.find('button').trigger('click')
  expect(wrapper.text()).toBe('value')
})