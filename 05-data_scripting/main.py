import pandas as pd
import os
import glob

BASE_DIR = os.getcwd()
DATA_DIR = os.path.join(BASE_DIR, 'data')
OUTPUT_DIR = os.path.join(BASE_DIR, 'output')

# Gabungkan semua file CSV menjadi satu DataFrame.
files = glob.glob(os.path.join(DATA_DIR, 'branch_*.csv'))
dfs = [pd.read_csv(file) for file in files]
df = pd.concat(dfs)

# 1. Hapus baris yang memiliki nilai NaN pada kolom transaction_id, date, dan customer_id.
df.dropna(subset=['transaction_id', 'date', 'customer_id'], inplace=True)

# 2. Ubah format kolom date menjadi tipe datetime.
df['date'] = pd.to_datetime(df['date'], errors='coerce')

# 3. Hilangkan duplikat berdasarkan transaction_id, pilih data berdasarkan date terbaru.
df = df.sort_values('date').drop_duplicates('transaction_id', keep='last')

# 4. Hitung total penjualan per cabang
df['total'] = df['quantity'] * df['price']
total_sales_per_branch = df.groupby('branch')['total'].sum().reset_index()

# Simpan hasilnya ke file baru total_sales_per_branch.csv dengan kolom branch dan total.
os.makedirs(OUTPUT_DIR, exist_ok=True)
output_file = os.path.join(OUTPUT_DIR, 'total_sales_per_branch.csv')
total_sales_per_branch.to_csv(output_file, index=False)
