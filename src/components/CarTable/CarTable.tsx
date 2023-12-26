import React, { useState } from "react";

interface Car {
  _id: string; // Include _id field
  make: string;
  model: string;
  price: number;
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

  const columnsToDisplay = [
    "_id",
    "make",
    "model",
    "price",
    "createdAt",
    "updatedAt",
  ]; 

  return (
    <div className="m-4">
      <table className="min-w-full divide-y divide-gray-200 p-4 border border-slate-300 rounded-lg">
        <thead className="bg-gray-50">
          <tr>
            {columnsToDisplay.map((column, index) => (
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
              {columnsToDisplay.map((column, colIndex) => (
                <td key={colIndex} className="px-6 py-4 whitespace-nowrap">
                  {column === "createdAt" || column === "updatedAt"
                    ? new Date(row[column] as any).toLocaleString("en-GB", {
                        day: "2-digit",
                        month: "2-digit",
                        year: "numeric",
                        hour: "2-digit",
                        minute: "2-digit",
                        second: "2-digit",
                      })
                    : (row as any)[column]}
                </td>
              ))}
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
