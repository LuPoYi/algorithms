using System;
using System.Collections.Generic;

namespace TechnicalQuiz
{
  class Transaction
  {
    public int ID { get; set; }
    public int Size { get; set; }
    public decimal Fee { get; set; }
    public decimal costPerformanceRatio { get; set; }
  }
  class Program
  {
    static void Main(string[] args)
    {
      int blockSize = 1000000;
      int currentSize = 0;
      decimal currentFee = 12.5m;

      Transaction[] TransactionArray = new Transaction[12] {
        new Transaction{ID = 1, Size = 57247, Fee = 0.0887m},
        new Transaction{ID = 2, Size = 98732, Fee = 0.1856m},
        new Transaction{ID = 3, Size = 134928, Fee = 0.2307m},
        new Transaction{ID = 4, Size = 77275, Fee = 0.1522m},
        new Transaction{ID = 5, Size = 29240, Fee = 0.0532m},
        new Transaction{ID = 6, Size = 15440, Fee = 0.0250m},
        new Transaction{ID = 7, Size = 70820, Fee = 0.1409m},
        new Transaction{ID = 8, Size = 139603, Fee = 0.2541m},
        new Transaction{ID = 9, Size = 63718, Fee = 0.1147m},
        new Transaction{ID = 10, Size = 143807, Fee = 0.2660m},
        new Transaction{ID = 11, Size = 190457, Fee = 0.2933m},
        new Transaction{ID = 12, Size = 40572, Fee = 0.0686m},
      };

      // Calculate cost performance ratio for each transaction
      foreach (Transaction element in TransactionArray)
      {
        element.costPerformanceRatio = element.Fee / element.Size;
      }

      // Sorting
      Array.Sort(TransactionArray, delegate (Transaction tx1, Transaction tx2)
      {
        return tx2.costPerformanceRatio.CompareTo(tx1.costPerformanceRatio);
      });

      // Pick transactions to the block
      foreach (Transaction element in TransactionArray)
      {
        if (currentSize + element.Size > blockSize)
        {
          continue;
        }
        currentSize += element.Size;
        currentFee += element.Fee;
      }
      Console.WriteLine("currentFee {0}", currentFee);
    }
  }
}

