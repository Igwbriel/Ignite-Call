import { CaretLeft, CaretRight } from 'phosphor-react'
import {
  CalendarActions,
  CalendarBody,
  CalendarContainer,
  CalendarDay,
  CalendarHeader,
  CalendarTittle,
} from './styles'
import { getWeekDays } from '../../utils/get-week-days'

export function Calendar() {
  const shortWeekDays = getWeekDays({ short: true })
  return (
    <CalendarContainer>
      <CalendarHeader>
        <CalendarTittle>
          Fevereiro <span>2023</span>
        </CalendarTittle>

        <CalendarActions>
          <button>
            <CaretLeft />
          </button>
          <button>
            <CaretRight />
          </button>
        </CalendarActions>
      </CalendarHeader>

      <CalendarBody>
        <thead>
          <tr>
            {shortWeekDays.map((weekDay) => (
              <th key={weekDay}>{weekDay}.</th>
            ))}
          </tr>
        </thead>
        <tbody>
          <tr>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td>
              <CalendarDay>1</CalendarDay>
            </td>
            <td>
              <CalendarDay disabled>2</CalendarDay>
            </td>
            <td>
              <CalendarDay>3</CalendarDay>
            </td>
          </tr>
          <tr>
            <td>
              <CalendarDay>4</CalendarDay>
            </td>
            <td>
              <CalendarDay>5</CalendarDay>
            </td>
            <td>
              <CalendarDay>6</CalendarDay>
            </td>
            <td>
              <CalendarDay>7</CalendarDay>
            </td>
            <td>
              <CalendarDay disabled>8</CalendarDay>
            </td>
            <td>
              <CalendarDay disabled>10</CalendarDay>
            </td>
            <td>
              <CalendarDay>11</CalendarDay>
            </td>
          </tr>
        </tbody>
      </CalendarBody>
    </CalendarContainer>
  )
}
