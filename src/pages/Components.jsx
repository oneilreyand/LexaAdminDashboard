import React, { useState } from 'react'
import { BookText, ChartNetwork, Component, BookCheck } from 'lucide-react'
import TabsNav from '../components/molecules/TabsNav'
import ToastDocPage from './SnackbarDocPage'
import ButtonDocPage from './ButtonDocPage'
import TableDocPage from './TableDocPage'
import DateRangePickerDocPage from './DateTimePickerDocPage'
import NoContent from '../components/atoms/NoContent'
import TableSample from '../components/atoms/TableSample'
import OffCanvasDocPage from './OffCanvasDocPage'
import ModalDocPage from './ModalDocPage'


const Components = () => {
  const [activeTab, setActiveTab] = useState('docTable')



  const handleTabChange = (tabId) => {
    setActiveTab(tabId)
  }

  const tabs = [
    {
      id: 'table',
      label: 'Table',
      icon: <BookText className="w-4 h-4" />,
      dropdown: [
        { id: 'docTable', label: 'Doc Table' },
        { id: 'exampleTable', label: 'Example Table' },
      ]
    },
    {
      id: 'chart',
      label: 'Chart',
      icon: <ChartNetwork className="w-4 h-4" />
    },
    {
      id: 'components',
      label: 'Components',
      icon: <Component className="w-4 h-4" />,
      dropdown: [
        { id: 'snackbar', label: 'Snackbar' },
        { id: 'button', label: 'Button' },
        { id: 'notifications', label: 'Notifications' },
        { id: 'date&timePicker', label: 'Date and Time Picker' },
        { id: 'offcanvas', label: 'Off Canvas' },
        { id: 'modal', label: 'Modal' }
      ]
    },
    {
      id: 'form',
      label: 'Form',
      icon: <BookCheck className="w-4 h-4" />
    },
    
  ]

  return (
    <div className="p-6 h-full">
      {/* TabsNav Demo */}
      <div className="h-full mb-8">
        <div className="bg-white dark:bg-gray-800 rounded-lg border border-gray-200 dark:border-gray-700 overflow-hidden flex flex-col h-full">
          <TabsNav tabs={tabs} onTabChange={handleTabChange} />
          <div className="flex-grow w-full overflow-auto">
            {activeTab === 'snackbar' && <ToastDocPage />}
            {activeTab === 'button' && <ButtonDocPage />}
            {activeTab === 'notifications' && <NoContent />}
            {activeTab === 'date&timePicker' && <DateRangePickerDocPage />}
            {activeTab === 'offcanvas' && <OffCanvasDocPage />}
            {activeTab === 'modal' && <ModalDocPage />}
            {activeTab === 'docTable' && <TableDocPage />}
            {activeTab === 'exampleTable' && <TableSample />}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Components
