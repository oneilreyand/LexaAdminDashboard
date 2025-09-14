import React, { useState } from 'react'
import { DatePicker } from '../components/molecules/DatePicker'
import { DateRangePicker } from '../components/molecules/DateRangePicker'
import { TimePicker } from '../components/molecules/TimePicker'


function DateTimePickerDocPage() {
  const [selectedDate, setSelectedDate] = useState(new Date())
  const [selectedDateRange, setSelectedDateRange] = useState({
    from: new Date(),
    to: new Date(),
  })

  const [selectedTime, setSelectedTime] = useState(new Date())

  const handleDateChange = (date) => {
    setSelectedDate(date)
    console.log('Selected date:', date)
  }

  const handleDateRangeChange = (dateRange) => {
    setSelectedDateRange(dateRange)
    console.log('Selected date range:', dateRange)
  }

  const handleTimeChange = (time) => {
    setSelectedTime(time)
    console.log('Selected time:', time)
  }

  // Code examples
  const importSnippet = `import { DatePicker } from '../components/molecules/DatePicker'
import { DateRangePicker } from '../components/molecules/DateRangePicker'
import { TimePicker } from '../components/molecules/TimePicker'`

  const usageSnippet = `const Component = () => {
  const [date, setDate] = useState(new Date())
  const [dateRange, setDateRange] = useState({
    from: new Date(),
    to: new Date(),
  })
  const [time, setTime] = useState(new Date())

  return (
    <div>
      <DatePicker
        date={date}
        onDateChange={setDate}
        className="w-full"
      />
      <DateRangePicker
        date={dateRange}
        onDateChange={setDateRange}
        className="w-full"
      />
      <TimePicker
        time={time}
        onTimeChange={setTime}
        className="w-full"
      />
    </div>
  )
}`

  const customPropsSnippet = `// Contoh penggunaan dengan props tambahan
<DatePicker
  date={selectedDate}
  onDateChange={handleDateChange}
  className="w-80 custom-datepicker"
/>

<DateRangePicker
  date={selectedDateRange}
  onDateChange={handleDateRangeChange}
  className="w-80 custom-datepicker"
/>

<TimePicker
  time={selectedTime}
  onTimeChange={handleTimeChange}
  className="w-80 custom-timepicker"
/>`

  return (
    <div className="h-full">
      <div className="space-y-8 p-6 max-w-6xl mx-auto">
        {/* Header Section */}
        <div className="text-center">
          <h1 className="text-3xl font-bold text-gray-800 dark:text-gray-200 mb-4">
            Date & Date Range Picker Documentation
          </h1>
          <p className="text-lg text-gray-600 dark:text-gray-400">
            Komponen pemilih tanggal tunggal dan rentang tanggal dengan kalender interaktif
          </p>
        </div>

        {/* Quick Demo */}
        <div className="bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-800 rounded-lg p-6">
          <h2 className="text-xl font-semibold text-blue-800 dark:text-blue-300 mb-4">
            Quick Demo
          </h2>
          <div className="space-y-4">
            <div className="flex flex-col items-start space-y-2">
              <label className="text-sm font-medium text-blue-800 dark:text-blue-300">
                Pilih Waktu:
              </label>
              <TimePicker
                time={selectedTime}
                onTimeChange={handleTimeChange}
                className="w-80"
                hideChevrons={false}
              />
            </div>
            <div className="text-sm text-blue-700 dark:text-blue-400">
              Selected Time: {selectedTime ? selectedTime.toLocaleTimeString([], {hour: '2-digit', minute:'2-digit'}) : 'None'}
            </div>
          </div>
          <div className="space-y-4 mt-6">
            <div className="flex flex-col items-start space-y-2">
              <label className="text-sm font-medium text-blue-800 dark:text-blue-300">
                Pilih Tanggal Tunggal:
              </label>
              <DatePicker
                date={selectedDate}
                onDateChange={handleDateChange}
                className="w-80"
              />
            </div>
            <div className="text-sm text-blue-700 dark:text-blue-400">
              Selected Date: {selectedDate ? selectedDate.toDateString() : 'None'}
            </div>
          </div>
          <div className="space-y-4 mt-6">
            <div className="flex flex-col items-start space-y-2">
              <label className="text-sm font-medium text-blue-800 dark:text-blue-300">
                Pilih Rentang Tanggal:
              </label>
              <DateRangePicker
                date={selectedDateRange}
                onDateChange={handleDateRangeChange}
                className="w-80"
              />
            </div>
            <div className="text-sm text-blue-700 dark:text-blue-400">
              Selected Range: {selectedDateRange?.from ? `${selectedDateRange.from.toDateString()} - ${selectedDateRange.to?.toDateString() || 'N/A'}` : 'None'}
            </div>
          </div>
        </div>

        {/* Features Overview */}
        <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6">
          <h2 className="text-xl font-semibold text-gray-800 dark:text-gray-200 mb-6">
            Fitur Date & Date Range Picker
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {/* Single Date Picker */}
            <div className="border border-blue-200 dark:border-blue-800 rounded-lg p-4 bg-blue-50 dark:bg-blue-900/20">
              <div className="flex items-center mb-2">
                <span className="text-2xl">📅</span>
                <span className="font-medium text-blue-800 dark:text-blue-300 ml-2">Single Date Picker</span>
              </div>
              <p className="text-sm text-blue-700 dark:text-blue-400">
                Komponen pemilih tanggal tunggal dengan kalender interaktif.
              </p>
            </div>

            {/* Date Range Picker */}
            <div className="border border-green-200 dark:border-green-800 rounded-lg p-4 bg-green-50 dark:bg-green-900/20">
              <div className="flex items-center mb-2">
                <span className="text-2xl">📆</span>
                <span className="font-medium text-green-800 dark:text-green-300 ml-2">Date Range Picker</span>
              </div>
              <p className="text-sm text-green-700 dark:text-green-400">
                Komponen pemilih rentang tanggal dengan kalender interaktif.
              </p>
            </div>

            {/* Responsive */}
            <div className="border border-orange-200 dark:border-orange-800 rounded-lg p-4 bg-orange-50 dark:bg-orange-900/20">
              <div className="flex items-center mb-2">
                <span className="text-2xl">📱</span>
                <span className="font-medium text-orange-800 dark:text-orange-300 ml-2">Responsive</span>
              </div>
              <p className="text-sm text-orange-700 dark:text-orange-400">
                Desain yang responsif dan dapat disesuaikan dengan berbagai ukuran layar.
              </p>
            </div>

            {/* Controlled */}
            <div className="border border-red-200 dark:border-red-800 rounded-lg p-4 bg-red-50 dark:bg-red-900/20">
              <div className="flex items-center mb-2">
                <span className="text-2xl">🎛️</span>
                <span className="font-medium text-red-800 dark:text-red-300 ml-2">Controlled</span>
              </div>
              <p className="text-sm text-red-700 dark:text-red-400">
                Komponen controlled dengan state management eksternal.
              </p>
            </div>

            {/* Customizable */}
            <div className="border border-teal-200 dark:border-teal-800 rounded-lg p-4 bg-teal-50 dark:bg-teal-900/20">
              <div className="flex items-center mb-2">
                <span className="text-2xl">🎨</span>
                <span className="font-medium text-teal-800 dark:text-teal-300 ml-2">Customizable</span>
              </div>
              <p className="text-sm text-teal-700 dark:text-teal-400">
                Mudah dikustomisasi dengan className dan styling tambahan.
              </p>
            </div>
          </div>
        </div>

        {/* Usage Documentation */}
        <div className="bg-gray-50 dark:bg-gray-800 rounded-lg shadow-md p-6">
          <h2 className="text-xl font-semibold text-gray-800 dark:text-gray-200 mb-4">
            Cara Penggunaan
          </h2>

          <div className="space-y-6">
            {/* Basic Usage */}
            <div>
              <h3 className="text-lg font-medium text-gray-800 dark:text-gray-200 mb-3">
                1. Import Component
              </h3>
              <pre className="bg-gray-100 dark:bg-gray-700 rounded p-4 text-sm overflow-x-auto">
                <code>{importSnippet}</code>
              </pre>
            </div>

            {/* Component Usage */}
            <div>
              <h3 className="text-lg font-medium text-gray-800 dark:text-gray-200 mb-3">
                2. Gunakan dalam Component
              </h3>
              <pre className="bg-gray-100 dark:bg-gray-700 rounded p-4 text-sm overflow-x-auto">
                <code>{usageSnippet}</code>
              </pre>
            </div>

            {/* Custom Props */}
            <div>
              <h3 className="text-lg font-medium text-gray-800 dark:text-gray-200 mb-3">
                3. Custom Props (opsional)
              </h3>
              <pre className="bg-gray-100 dark:bg-gray-700 rounded p-4 text-sm overflow-x-auto">
                <code>{customPropsSnippet}</code>
              </pre>
            </div>
          </div>
        </div>

        {/* API Reference */}
        <div className="bg-gray-50 dark:bg-gray-800 rounded-lg shadow-md p-6">
          <h2 className="text-xl font-semibold text-gray-800 dark:text-gray-200 mb-4">
            API Reference
          </h2>

          <div className="space-y-4">
            <div className="border-b border-gray-200 dark:border-gray-700 pb-4">
              <h3 className="text-lg font-medium text-gray-800 dark:text-gray-200 mb-2">
                Props
              </h3>
              <div className="space-y-4">
                <div>
                  <h4 className="font-medium text-gray-700 dark:text-gray-300">DatePicker</h4>
                  <ul className="list-disc list-inside text-sm text-gray-600 dark:text-gray-400 space-y-1 ml-4">
                    <li><code>date</code> (Date object) - Tanggal yang dipilih</li>
                    <li><code>onDateChange</code> (function) - Callback function yang dipanggil saat tanggal berubah</li>
                    <li><code>className</code> (string) - Custom CSS classes untuk container</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-medium text-gray-700 dark:text-gray-300">DateRangePicker</h4>
                  <ul className="list-disc list-inside text-sm text-gray-600 dark:text-gray-400 space-y-1 ml-4">
                    <li><code>date</code> (object) - Objek rentang tanggal dengan properti <code>from</code> dan <code>to</code> (Date objects)</li>
                    <li><code>onDateChange</code> (function) - Callback function yang dipanggil saat rentang tanggal berubah</li>
                    <li><code>className</code> (string) - Custom CSS classes untuk container</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="border-b border-gray-200 dark:border-gray-700 pb-4">
              <h3 className="text-lg font-medium text-gray-800 dark:text-gray-200 mb-2">
                Dependencies
              </h3>
              <ul className="list-disc list-inside text-sm text-gray-600 dark:text-gray-400 space-y-1">
                <li><code>date-fns</code> - Untuk manipulasi tanggal</li>
                <li><code>react-day-picker</code> - Untuk komponen kalender</li>
                <li><code>lucide-react</code> - Untuk ikon</li>
              </ul>
            </div>
          </div>
        </div>


      </div>
    </div>
  )
}

export default DateTimePickerDocPage
