import React, { useState } from "react";

interface Car {
  make: string;
  model: string;
  price: number;
  age: number;
  mileage: number;
  fuelType: string;
  location: string;
  colour: string;
  bodyType: string;
  gearbox: string;
  engineSize: string;
  specification: Array<{ key: string; value: string }>;
  doors: number;
  seats: number;
  reserved: boolean;
  owner: string;
  createdAt: Date;
  updatedAt: Date;
}

interface TableProps {
  data: Car[];
}

const CarTable: React.FC<TableProps> = ({ data }) => {
  const [selectedRows, setSelectedRows] = useState<Record<number, boolean>>({});

  const handleCheckboxChange = (rowIndex: number) => {
    setSelectedRows({
      ...selectedRows,
      [rowIndex]: !selectedRows[rowIndex],
    });
  };

  return (
    <div className="m-4">
      <table className="min-w-full divide-y divide-gray-200 p-4 border border-slate-300 rounded-lg">
        <thead className="bg-gray-50">
          <tr>
            {Object.keys(data[0]).map((column, index) => (
              <th
                key={index}
                className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
              >
                {column}
              </th>
            ))}
            <th></th>
          </tr>
        </thead>
        <tbody className="bg-white divide-y divide-gray-200">
          {data.map((row, rowIndex) => (
            <tr
              key={rowIndex}
              className={rowIndex % 2 === 0 ? "bg-gray-50" : "bg-white"}
            >
              {/* Columns */}
              {Object.entries(row).map(([key, value], colIndex) => (
                <td key={colIndex} className="px-6 py-4 whitespace-nowrap">
                  {Array.isArray(value)
                    ? value.map(
                        (item: { key: string; value: string }, idx: number) => (
                          <div key={idx}>
                            <span>{item.key}: </span>
                            <span>{item.value}</span>
                          </div>
                        )
                      )
                    : key === "createdAt" || key === "updatedAt"
                    ? // Convert Date objects to strings
                      String(value)
                    : // Render other non-Date values
                      value}
                </td>
              ))}
              {/* Checkbox cell */}
              <td>
                <input
                  type="checkbox"
                  checked={!!selectedRows[rowIndex]}
                  onChange={() => handleCheckboxChange(rowIndex)}
                />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default CarTable;
