import { shallowMount } from '@vue/test-utils'; 
import { playerList } from '../src/api';
import { router } from '../src/main';
import Table from '../src/components/table/Table.vue';

jest.mock('../../api');
jest.mock('../../main', () => ({ router: { push: jest.fn() } }));

describe('Table', () => {
	const mockedPlayerList = playerList;
  it('should navigate to edit-player route when edit button is clicked', async () => {
    const playerId = 123;
    mockedPlayerList.value = [{ 
		college: 'School',
		country: 'Brazil',
	}] as Player[];

    const wrapper = shallowMount(Table);
    await wrapper.vm.$nextTick();

    const editButton = wrapper.find('.font-medium.text-blue-600'); // Encontra o botão de edição
    await editButton.trigger('click'); // Simula o clique no botão de edição

    expect(router.push).toHaveBeenCalledWith({ name: 'edit-player', params: { id: playerId } });
  });

  it('should sort playerList when sort button is clicked', async () => {
    playerList.value = [{ 
		college: 'School',
		country: 'Brazil',
	}] as Player[];

    const wrapper = shallowMount(Table);
    await wrapper.vm.$nextTick();

    const sortButton = wrapper.find('button');
    await sortButton.trigger('click');

    expect(playerList.value.map(player => player.first_name)).toEqual(['A', 'B', 'Z']);
  });
});
