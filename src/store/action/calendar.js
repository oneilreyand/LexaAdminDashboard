export const getDataCalendar = () => {
  return async (dispatch) => {
    const onSuccess = (res) => {
      dispatch({
        type: 'GET_DATA_CALENDAR',
        payload: res
      })
    }

    const onError = (err) => {
      console.log(err)
    }

    try {
      // Simulate fetching data
      const today = new Date();
      const tomorrow = new Date(today);
      tomorrow.setDate(today.getDate() + 1);
      const dayAfter = new Date(today);
      dayAfter.setDate(today.getDate() + 2);
      const data = [
        {
          id: 1,
          title: "Event 1",
          startTime: "09:00",
          endTime: "11:00",
          startDate: "2025-09-18",
          endDate: "2025-09-19",
          type: "holiday"
        },
        {
          id: 2,
          title: "Event 2 yang judulnya panjang",
          startTime: "13:30",
          endTime: "15:00",
          startDate: "2025-09-19",
          endDate: "2025-09-20",
          type: "business"
        },
        {
          id: 3,
          title: "Event 3",
          startTime: "10:00",
          endTime: "12:30",
          startDate: "2025-09-20",
          endDate: "2025-09-22",
          type: "family"
        },
        {
          id: 4,
          title: "Event 4",
          startTime: "14:00",
          endTime: "15:30",
          startDate: "2025-09-18",
          endDate: "2025-09-18",
          type: "personal"
        },
        {
          id: 5,
          title: "Event 5",
          startTime: "08:30",
          endTime: "10:00",
          startDate: "2025-09-21",
          endDate: "2025-09-23",
          type: "business"
        },
        {
          id: 6,
          title: "Event 6",
          startTime: "16:00",
          endTime: "18:00",
          startDate: "2025-09-19",
          endDate: "2025-09-20",
          type: "holiday"
        },
        {
          id: 7,
          title: "Event 7",
          startTime: "11:30",
          endTime: "13:30",
          startDate: "2025-09-20",
          endDate: "2025-09-21",
          type: "personal"
        },
        {
          id: 8,
          title: "Event 8",
          startTime: "15:00",
          endTime: "17:30",
          startDate: "2025-09-22",
          endDate: "2025-09-23",
          type: "family"
        },
        {
          id: 9,
          title: "Event 9",
          startTime: "09:30",
          endTime: "12:00",
          startDate: "2025-09-23",
          endDate: "2025-09-24",
          type: "default"
        },
        {
          id: 10,
          title: "Event 10",
          startTime: "13:00",
          endTime: "15:30",
          startDate: "2025-09-24",
          endDate: "2025-09-25",
          type: "business"
        },
        {
          id: 11,
          title: "Event 2 yang judulnya panjang 2",
          startTime: "13:30",
          endTime: "15:00",
          startDate: "2025-09-19",
          endDate: "2025-09-20",
          type: "business"
        },
        {
          id: 12,
          title: "Event 2 yang judulnya panjang 3",
          startTime: "13:30",
          endTime: "15:00",
          startDate: "2025-09-19",
          endDate: "2025-09-20",
          type: "business"
        },
      ]
      
      onSuccess(data)
    } catch (error) {
      onError(error)
    }
  }
}
