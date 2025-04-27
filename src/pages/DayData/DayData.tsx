import { useParams } from 'react-router';
import SearchSelect from 'react-select';

import { format } from 'date-fns';
import { ru } from 'date-fns/locale/ru';
import { useState } from 'react';
import { Tabs, Title } from '../../shared/ui';
import { MaterialsTable, WorksTable } from '../../widget';
import styles from './DayData.module.css';

const data = [
  {
    id: 1,
    name: 'Раздел 1',
  },
  {
    id: 2,
    name: 'Раздел 2',
  },
];

const DayData = () => {
  const { date } = useParams();

  const [constructionId, setConstructionId] = useState<number | undefined>();

  const options = data?.map((construction) => ({
    value: construction.id,
    label: construction.name,
  }));

  return (
    <div>
      <Title tag="h1" size="xl" className={styles.objectSelectTitle}>
        Выберите раздел
      </Title>
      <SearchSelect
        placeholder="Объект"
        isSearchable={true}
        noOptionsMessage={() => 'Не найдено'}
        options={options}
        onChange={(e) => setConstructionId(e?.value)}
        className={styles.searchSelect}
      />
      {constructionId && date && (
        <Title tag="h2" size="l" className={styles.dateTitle}>
          Заполнение данных за {format(date, 'd MMMM yyyy', { locale: ru })}
        </Title>
      )}
      {constructionId && date && (
        <Tabs className={styles.tabs}>
          <Tabs.TabList>
            <Tabs.Tab>Работы</Tabs.Tab>
            <Tabs.Tab>Материалы</Tabs.Tab>
          </Tabs.TabList>
          <Tabs.TabPanels>
            <Tabs.TabPanel>
              <WorksTable />
            </Tabs.TabPanel>
            <Tabs.TabPanel>
              <MaterialsTable />
            </Tabs.TabPanel>
          </Tabs.TabPanels>
        </Tabs>
      )}
    </div>
  );
};

export default DayData;
